// components/DocsLayout.js

const DocsLayout = ({ children }) => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-16 p-4">
            <aside className="col-span-12 md:col-span-3 bg-gray-800 text-white p-4">
                <nav>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#introduction"
                                className="text-gray-300 hover:text-white"
                            >
                                Introduction
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#setup"
                                className="text-gray-300 hover:text-white"
                            >
                                Setup
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#usage"
                                className="text-gray-300 hover:text-white"
                            >
                                Usage
                            </a>
                        </li>
                        {/* 필요한 메뉴 항목을 추가하세요 */}
                    </ul>
                </nav>
            </aside>
            <main className="col-span-12 md:col-span-9">{children}</main>
        </div>
    );
};

export default DocsLayout;
