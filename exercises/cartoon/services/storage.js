angular.module('cartoonApp')

.service('storeAndPostService', function () {
    var self = this;
    this.cartoonEntryStorage = [];
    this.assemblecartoonEntry = function (url, title, description) {
        var cartoonEntry = {
            url: urlEntry,
            title: titleEntry,
            description: descriptionEntry
        }
      self.cartoonEntryStorage(cartoonEntry);
        return cartoonEntryStorage;
}})