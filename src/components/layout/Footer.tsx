import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-gray-900 border-t border-gray-800", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          {/* Left Section */}
          <div className="flex items-center">
            <div className="text-sm text-gray-300">
              <span className="text-white font-semibold">© Pyle</span> is
              proudly owned by{" "}
              <Link
                href="https://hibootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-blue-300 transition-colors"
              >
                HiBootstrap
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <p className="text-sm text-gray-400 text-center md:text-right">
              <span className="text-white font-semibold">PYLE</span> - Ultimate
              Inventory With{" "}
              <span className="text-white font-semibold">POS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
