import z from "zod";

const checkAccurateDomain = z
  .string()
  .min(1, "Domain is required")
  .max(253, "Domain is too long")
  .refine((val) => !val.startsWith("http://") && !val.startsWith("https://"), {
    message: "Enter a domain only, not a full URL (e.g. example.com)",
  })
  .refine((val) => !val.startsWith("-") && !val.endsWith("-"), {
    message: "Domain cannot start or end with a hyphen",
  })
  .refine(
    (val) =>
      /^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/.test(
        val,
      ),
    {
      message: "Invalid domain format",
    },
  );

export { checkAccurateDomain };
