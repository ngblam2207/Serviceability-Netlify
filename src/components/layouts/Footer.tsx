const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {thisYear} | Powered by With Cashback PTY LTD </p>
        </footer>
    )
}

export default Footer