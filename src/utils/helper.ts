export const base64Encode = (str: string): string => {
  const bytes = new TextEncoder().encode(str);
  const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join(
    "",
  );
  return btoa(binString)
    .replace(/\+/g, "-") // Make URL-safe
    .replace(/\//g, "_") // Make URL-safe
    .replace(/=+$/, ""); // Remove padding
};

export const base64Decode = (encoded: string): string => {
  if (!encoded) return "";

  try {
    // 1. Fix URL-safe characters back to standard Base64
    let base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");

    // 2. Restore padding if it was stripped
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }

    // 3. Convert Base64 to binary string
    const binString = atob(base64);

    // 4. Convert binary string to Uint8Array
    const bytes = new Uint8Array(binString.length);
    for (let i = 0; i < binString.length; i++) {
      bytes[i] = binString.charCodeAt(i);
    }

    // 5. Decode as UTF-8 (Crucial for Khmer/Unicode)
    return new TextDecoder().decode(bytes);
  } catch (error) {
    console.error("Base64 Decode Error:", error);
    return "DECODE_ERROR";
  }
};
