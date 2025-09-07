import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProfilePage from "./Profile";
import { createClient } from "@/lib/supabase";

const mockProfiles = [
  { id: "1", username: "testuser1" },
  { id: "2", username: "testuser2" },
];

// Mock the Supabase client using vi.mock
vi.mock('@/lib/supabase', () => {
  const mockSupabaseClient = { from: vi.fn() };
  return { createClient: vi.fn(() => mockSupabaseClient) };
});

// Use vi.mocked to get a typed mock object
const mockedCreateClient = vi.mocked(createClient, true);

describe("ProfilePage", () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it("displays loading state initially", () => {
    // Mock a pending promise to keep it in a loading state for the client created by createClient
    mockedCreateClient().from.mockReturnValue({
      select: vi.fn().mockReturnValue(new Promise(() => {})),
    } as any);

    render(<ProfilePage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("fetches and displays profiles successfully", async () => {
    mockedCreateClient().from.mockReturnValue({
      select: vi.fn().mockResolvedValue({ data: mockProfiles, error: null }),
    } as any);

    render(<ProfilePage />);

    // Wait for the data to load
    await waitFor(() => {
      expect(screen.getByText("testuser1")).toBeInTheDocument();
      expect(screen.getByText("testuser2")).toBeInTheDocument();
      expect(screen.queryByText("Loading...")).toBeNull();
    });
  });

  it("handles error when fetching profiles and logs to console", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const fetchError = new Error("Failed to fetch");

    mockedCreateClient().from.mockReturnValue({
      select: vi.fn().mockResolvedValue({ data: null, error: fetchError }),
    } as any);

    render(<ProfilePage />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Error fetching profiles:", fetchError);
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    expect(screen.queryByText("testuser1")).toBeNull();

    consoleSpy.mockRestore();
  });

  it('displays nothing if data is empty', async () => {
    mockedCreateClient().from.mockReturnValue({
      select: vi.fn().mockResolvedValue({ data: [], error: null }),
    } as any);

    render(<ProfilePage />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });

    const list = screen.getByRole('list');
    expect(list.children.length).toBe(0);
  });
});
