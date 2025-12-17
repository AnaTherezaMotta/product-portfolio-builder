export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-primary-foreground border-t border-primary-foreground/10">
      <div className="container-narrow text-center">
        <p className="text-sm text-primary-foreground/60">
          © {currentYear} Portfolio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
