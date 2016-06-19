export function LodashFactory ($window) {
  'ngInject';
  var window = $window;
  var _ = window._;
  delete window._;

  _.mixin({ 'groupFilter': groupFilter });

  function groupFilter(data, criteria, groupSort, groupItemsName) {
    if (!data || !data.length) {
      return data;
    }

    groupItemsName = groupItemsName || 'items';

    return _
      .chain(data)
      .sortBy(groupSort)
      .groupBy(criteria)
      .pairs()
      .map(function (currentItem) {
        return _.object(_.zip(['key', groupItemsName], currentItem));
      })
      .sortBy('key')
      .value();
		}

  return _;
}