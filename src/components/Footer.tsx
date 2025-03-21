export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Kunal Suhanda</h3>
          </div>
          <div className="text-center md:text-right text-muted-foreground">
            <p>© {new Date().getFullYear()} Kunal Suhanda. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 