export function getFestState(isContinue: boolean, startDate: string, endDate: string): string {
  if (isContinue) {
    return '진행중';
  } else {
    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > today) {
      return '진행전';
    } else if (end < today) {
      return '진행완료';
    }
  }
  return '';
}