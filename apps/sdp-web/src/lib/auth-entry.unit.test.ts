import { describe, expect, it } from "vitest";
import { shouldLoadClerkForPath } from "./auth-entry";

describe("workspace loading authentication", () => {
  it("keeps the Clerk client mounted while organization sync is pending", async () => {
    expect(await shouldLoadClerkForPath("/workspace-loading")).toBe(true);
  });

  it("does not add Clerk to unrelated public routes", async () => {
    expect(await shouldLoadClerkForPath("/docs")).toBe(false);
  });

  it("keeps the Clerk client off the homepage, which reads the session on the server", async () => {
    expect(await shouldLoadClerkForPath("/")).toBe(false);
  });
});
