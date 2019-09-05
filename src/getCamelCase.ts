export function getCamelCase(propertyName: string) {
  return propertyName.replace(/-([a-z])/gi, function(s, group1) {
      return group1.toUpperCase();
  });
}
