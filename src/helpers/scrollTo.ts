import { ScrollTo } from 'helpers/interfaces';

export const scrollToTop = ({ index, content, ref, setScroll }: ScrollTo) => {
  if (!ref) return;
  const element = ref.current as HTMLDivElement;
  const isRedirect = index === content.length - 1 && element;

  if (isRedirect) {
    element.scrollIntoView();
    setScroll(false);
  }
};
