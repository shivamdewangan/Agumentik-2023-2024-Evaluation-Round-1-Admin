
export interface NavProps {
    children: string;
    href?: string;
}

function Nav({ children, href = "#" }: NavProps) {

    return (
        <a href={href} className="block my-2 rounded-lg text-white transition-all py-3 px-5 hover:bg-[#fff1]">{children}</a>
    )
}

export default Nav;
