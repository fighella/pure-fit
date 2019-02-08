export class AppHelpers {
  static slashJoin(arr) {
    return arr
      .filter(Boolean)
      .map((item, index) => item)
      .join(' / ');
  }
}
