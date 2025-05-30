export const scrollToSection = (sectionId: string, offset: number = 80): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleNavigation = (href: string, e: React.MouseEvent): void => {
  // Only act on hash links that are for same-page section scrolling.
  // These typically look like "#section-id" or "/#section-id".
  // HashRouter page links look like "#/page-route".
  if (href.startsWith('#') && href.indexOf('/') === -1) { // No slash after #
    e.preventDefault();
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  } else if (href.startsWith('/#') && href.indexOf('/', 2) === -1) { // For links like /#section-id from other pages
    e.preventDefault();
    // First, navigate to homepage if not already there (HashRouter handles this with Link to="/")
    // Then, scroll to section. This part needs care with HashRouter and Link component.
    // The Link component should handle going to "/" (which becomes /#/) and then ScrollToTop/useEffect can handle the actual scroll.
    // For now, let's ensure it correctly scrolls if already on the homepage or if the Link component itself handles the root navigation.
    const sectionId = href.substring(href.lastIndexOf('#') + 1);
    const targetPath = href.substring(0, href.lastIndexOf('#'));
    
    // If Link is to "/#section", and current path is already "/" (or "/#/")
    // Allow Link to navigate to "/#/". The ScrollToTop or a similar mechanism should handle the scroll to sectionId.
    // The main goal here is NOT to preventDefault for full page hash navigations like '#/careers'.
    if (window.location.hash === '#/' || window.location.hash === '' || window.location.pathname === '/') {
        scrollToSection(sectionId);
    }
    // If it's a link like "/#contact" from a page like "/team" (i.e. current hash is "#/team")
    // the <Link to="/#contact"> will correctly change the hash to "/#contact".
    // Then ScrollToTop logic in App.tsx needs to pick up the section from the hash state after the page potentially re-renders.
    // The `handleNavigation` itself doesn't need to do much more for these `/#[section]` links when using React Router's <Link>
  }
  // If it's a link like "#/careers", the conditions above won't match, so default Link behavior proceeds.
};

export const scrollToContact = (inquiryType?: string): void => {
  // Ensure we scroll to the contact section on the current page (expected to be homepage)
  // If called from another page, the navigation to homepage + section scroll should be handled by a Link component.
  // This utility is best used when already on the page with the contact section.
  scrollToSection('contact');
  
  if (inquiryType) {
    const selectElement = document.getElementById('inquiryType') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = inquiryType;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}; 