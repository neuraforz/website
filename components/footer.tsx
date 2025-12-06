import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Neuraforz</h3>
            <p className="text-gray-300 text-sm">
              Empowering businesses with intelligent technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/staff-augmentation" className="text-gray-300 hover:text-white transition-colors">
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link href="/services/qa-testing" className="text-gray-300 hover:text-white transition-colors">
                  QA & Testing
                </Link>
              </li>
              <li>
                <Link href="/services/erp-crm-implementations" className="text-gray-300 hover:text-white transition-colors">
                  ERP & CRM
                </Link>
              </li>
              <li>
                <Link href="/services/managed-services" className="text-gray-300 hover:text-white transition-colors">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-gray-300 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-gray-300 hover:text-white transition-colors">
                  AI & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">support@neuraforz.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">+1 (773) 888-9957</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Chicago, IL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-300">
            © {currentYear} Neuraforz. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
