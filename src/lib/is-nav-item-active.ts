import type { INavItemConfig } from '@/types/nav';

const isChildUrl = (parentUrl: string, childUrl: string): boolean => {
  // không tính trường hợp là / vì luôn là parentUrl
  if(parentUrl === '/') return false;
  let compareParentUrl : string = parentUrl;
  let compareChildUrl: string = childUrl;

  if (!compareParentUrl.endsWith('/')) {
    compareParentUrl += '/';
  }
  if (!compareChildUrl.endsWith('/')) {
    compareChildUrl += '/';
  }

  return compareChildUrl.startsWith(compareParentUrl);
}

export function isNavItemActive({
  disabled,
  external,
  href,
  matcher,
  pathname,
}: Pick<INavItemConfig, 'disabled' | 'external' | 'href' | 'matcher'> & { pathname: string }): boolean {
  if (disabled || !href || external) {
    return false;
  }

  if (matcher) {
    if (matcher.type === 'startsWith') {
      return pathname.startsWith(matcher.href);
    }

    if (matcher.type === 'equals') {
      return pathname === matcher.href;
    }

    return false;
  }

  return href === pathname || isChildUrl(href, pathname);
}
