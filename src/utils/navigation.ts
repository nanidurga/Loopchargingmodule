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
  if (href.startsWith('#')) {
    e.preventDefault();
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  }
};

export const scrollToContact = (inquiryType?: string): void => {
  scrollToSection('contact');
  
  // If an inquiry type is specified, set it in the form
  if (inquiryType) {
    const selectElement = document.getElementById('inquiryType') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = inquiryType;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}; 