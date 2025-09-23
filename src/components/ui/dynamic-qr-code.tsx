"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faQrcode } from "@fortawesome/free-solid-svg-icons";

interface DynamicQRCodeProps {
  url?: string;
  size?: number;
  className?: string;
  fallbackText?: string;
  showClickIcon?: boolean;
}

export function DynamicQRCode({
  url,
  size = 128,
  className = "",
  fallbackText = "QR Code",
  showClickIcon = true,
}: DynamicQRCodeProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const [qrUrl, setQrUrl] = useState<string>("");
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Generate the URL for the resume
    const resumeUrl = url || `${window.location.origin}/docs/resume.pdf`;
    setQrUrl(resumeUrl);
  }, [url]);

  useEffect(() => {
    if (!isClient || !qrRef.current || !qrUrl) return;

    // Clear previous QR code
    qrRef.current.innerHTML = "";

    // Dynamically import qr-creator to avoid SSR issues
    import("qr-creator")
      .then((QrCreator) => {
        try {
          QrCreator.default.render(
            {
              text: qrUrl,
              radius: 0.5, // Rounded corners
              ecLevel: "H", // High error correction
              fill: "#1f2937", // Dark gray foreground
              background: null, // Transparent background
              size: size,
            },
            qrRef.current!
          );
        } catch (error) {
          console.error("Failed to generate QR code:", error);
          // Fallback to text if QR generation fails
          if (qrRef.current) {
            qrRef.current.innerHTML = `<div class="flex items-center justify-center w-full h-full text-xs text-gray-500">${fallbackText}</div>`;
          }
        }
      })
      .catch((error) => {
        console.error("Failed to load QR creator:", error);
        // Fallback to text if library fails to load
        if (qrRef.current) {
          qrRef.current.innerHTML = `<div class="flex items-center justify-center w-full h-full text-xs text-gray-500">${fallbackText}</div>`;
        }
      });
  }, [isClient, qrUrl, size, fallbackText]);

  const handleClick = () => {
    if (qrUrl) {
      window.open(qrUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (!isClient) {
    // SSR fallback
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="text-xs text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${className}`}
      style={{ width: size, height: size }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* QR Code Container */}
      <div
        ref={qrRef}
        className="flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      />

      {/* Click Icon Overlay */}
      {showClickIcon && (
        <div
          className={`absolute top-1 right-1 transition-all duration-300 ${
            isHovered ? "opacity-100 scale-110" : "opacity-60 scale-100"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-gray-200">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="w-3 h-3 text-gray-700"
            />
          </div>
        </div>
      )}

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
