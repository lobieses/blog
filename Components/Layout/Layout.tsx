import { NextPage } from 'next'
import Link from "next/link";
import {LinkA, Menu, Wrapper} from "./LayoutStyles";

const Layout: NextPage = ({children}) => {
    return (
        <>
            <Wrapper>
                <nav>
                    <Menu>
                        <Link href={'/'}>
                            <LinkA>Home</LinkA>
                        </Link>
                        <Link href={'/posts/new'}>
                            <LinkA>Create post</LinkA>
                        </Link>
                    </Menu>
                </nav>
            </Wrapper>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;