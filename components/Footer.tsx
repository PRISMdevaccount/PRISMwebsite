export default function Footer() {
  return (
    <footer className="bg-secondary/20 text-center py-8 px-6 mt-12">
      <p className="text-gray-800 text-lg font-medium">
        Contact us at{' '}
        <a href="mailto:diyaramakrishnan009@gmail.com" className="text-primary underline">
          diyaramakrishnan009@gmail.com
        </a>
      </p>
      <p className="mt-2 text-sm text-gray-500">© {new Date().getFullYear()} PRISM. All rights reserved.</p>
    </footer>
  );
}
