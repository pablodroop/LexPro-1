export function Hero () {
    return (
        <div className="w-full h-36 relative flex justify-between bg-gray800 px-8 tablet:px-[8.5rem] items-center">
            <img
                src="bg.png"
                className="absolute object-cover opacity-40 h-36  w-full inset-0"
            />
            <h1 className="text-5xl font-semibold text-brown400 ">O Escritório</h1>
        </div>
    )
}