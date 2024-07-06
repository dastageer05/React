import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-400 border-t-2 border-t-black py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                    <Logo width="100px" />
                    <p className="text-sm text-gray-600 md:ml-4 mt-2 md:mt-0">
                        &copy; 2023 DevUI. All Rights Reserved.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start">
                    <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-6">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">
                            Company
                        </h3>
                        <ul>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Affiliate Program
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Press Kit
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-6">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">
                            Support
                        </h3>
                        <ul>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">
                            Legals
                        </h3>
                        <ul>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
