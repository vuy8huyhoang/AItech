import Image from "next/image";
import Link from "next/link";

export default function Dangky() {
    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-gray-50 bg-gradient-to-r from-indigo-100 via-indigo-50 to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black">
            <div className="flex flex-col lg:flex-row justify-center w-full max-w-7xl space-y-8 lg:space-y-0  rounded-2xl p-8">
                {/* Bên trái: Hình ảnh */}
                <div className="relative sm:w-full lg:w-[45%] h-auto rounded-l-2xl overflow-hidden shadow-xl transition-transform duration-500 transform hover:scale-105">
                    <Image
                        src="/anh-web-vuai.png"  // Thay đổi thành đường dẫn hình ảnh đúng
                        alt="Hình ảnh nhân vật AI của Vu AI"
                        layout="fill"  // Ảnh sẽ lấp đầy container
                        style={{
                            objectFit: "cover",  // Ảnh sẽ lấp đầy container mà không bị méo
                        }}
                        placeholder="blur"
                        blurDataURL="/anh-web-vuai.png"  // Thay đổi với URL ảnh mờ nếu có
                        priority
                    />
                </div>

                {/* Bên phải: Form Đăng ký */}
                <div className="w-full lg:mt-0 sm:w-[80%] lg:w-[50%] max-w-md p-8 space-y-2 lg:space-y-8 bg-white rounded-2xl lg:rounded-bl-none lg:rounded-tl-none lg:rounded-r-2xl shadow-2xl flex flex-col justify-center border border-gray-200">
                    <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-800">Xin chào mừng bạn</h1>
                    <p className="text-center text-l text-gray-600 mb-4">Đăng ký tài khoản để sử dụng dịch vụ của chúng tôi</p>
                    <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Đăng Ký</h2>

                    <form className="space-y-8 ">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                                placeholder="Nhập email của bạn"
                            />
                        </div>

                        {/* Mật khẩu */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                                placeholder="Nhập mật khẩu"
                            />
                        </div>

                        {/* Nút đăng ký */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            >
                                Đăng ký
                            </button>
                        </div>

                        {/* Nút Đăng ký với Google */}
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <button
                                type="button"
                                className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 focus:outline-none transition-all duration-300"
                            >
                                <Image src="/google-icon.png" alt="Google" className="w-6 h-6" width={24} height={24} />
                                <span className="text-gray-700">Đăng ký với Google</span>
                            </button>
                        </div>

                        {/* Đăng nhập */}
                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Bạn đã có tài khoản?{" "}
                                <Link href="/dang-nhap" className="text-indigo-600 hover:text-indigo-700 focus:outline-none transition-all duration-300">
                                    Đăng nhập
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
