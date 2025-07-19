import { Location, NavigateFunction } from 'react-router-dom';

export const scrollToSection = (sectionId: string, offset: number = 80): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// For BrowserRouter: only intercept /#section links for scrolling
export const handleNavigation = (href: string, e: React.MouseEvent, location?: Location, navigate?: NavigateFunction): void => {
  if (href.startsWith('/#')) {
    e.preventDefault();
    const sectionId = href.split('#')[1];
    if (location && location.pathname !== '/') {
      // If not on homepage, navigate to homepage then scroll after navigation
      if (navigate) navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100); // Delay to allow navigation
    } else {
      scrollToSection(sectionId);
    }
  }
  // Otherwise, let React Router handle navigation
};

export const scrollToContact = (inquiryType?: string): void => {
  scrollToSection('contact');
  if (inquiryType) {
    const selectElement = document.getElementById('inquiryType') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = inquiryType;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
};
