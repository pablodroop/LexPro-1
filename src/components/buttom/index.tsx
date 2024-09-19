import { ComponentProps } from "react"
import { FaChevronRight } from "react-icons/fa";

interface ButtonProps extends ComponentProps<'button'> {
    variant?: 'PRIMARY' | undefined;
    title: string
}

export function Buttom({ variant, title, ...props }: ButtonProps) {
    return (
        <button {...props} className={`font-bold text-sm uppercase text flex items-center hover:opacity-80 transition-all justify-center text-brown400 gap-3 rounded ${variant == 'PRIMARY' && `bg-bgButton h-[3.188rem] px-5 `}`}>
            {title}
            <FaChevronRight className='size-4 fill-brown400' />
        </button>
    )
}