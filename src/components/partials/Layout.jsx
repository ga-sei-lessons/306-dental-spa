import Header from "./Header"

export default function Layout(props) {
    // console.log(props)
    return (
        <>
            <Header />
            {/* define asides here */}
            {/* this is how you make a non-void element in react */}
            <main>
                {props.children}
            </main>

            <footer>
                <p>© awesome sauce GNU GPLv3 {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}