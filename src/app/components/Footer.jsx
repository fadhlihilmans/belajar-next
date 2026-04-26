function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <p>&copy; {currentYear} </p>
    </footer>
  )
}

export default Footer