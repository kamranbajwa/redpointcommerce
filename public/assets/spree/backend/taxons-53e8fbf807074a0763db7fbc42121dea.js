(function() {
  $(document).ready(function() {
    window.productTemplate = Handlebars.compile($('#product_template').text());
    $('#taxon_products').sortable();
    $('#taxon_products').on("sortstop", function(event, ui) {
      return $.ajax({
        url: Spree.routes.classifications_api,
        method: 'PUT',
        data: {
          product_id: ui.item.data('product-id'),
          taxon_id: $('#taxon_id').val(),
          position: ui.item.index()
        }
      });
    });
    if ($('#taxon_id').length > 0) {
      $('#taxon_id').select2({
        dropdownCssClass: "taxon_select_box",
        placeholder: Spree.translations.find_a_taxon,
        ajax: {
          url: Spree.routes.taxons_search,
          datatype: 'json',
          data: function(term, page) {
            return {
              per_page: 50,
              page: page,
              q: {
                name_cont: term
              }
            };
          },
          results: function(data, page) {
            var more;
            more = page < data.pages;
            return {
              results: data['taxons'],
              more: more
            };
          }
        },
        formatResult: function(taxon) {
          return taxon.pretty_name;
        },
        formatSelection: function(taxon) {
          return taxon.pretty_name;
        }
      });
    }
    return $('#taxon_id').on("change", function(e) {
      var el;
      el = $('#taxon_products');
      return $.ajax({
        url: Spree.routes.taxon_products_api,
        data: {
          id: e.val
        },
        success: function(data) {
          var product, _i, _len, _ref;
          el.empty();
          if (data.products.length === 0) {
            $('#sorting_explanation').hide();
            return $('#taxon_products').html("<h4>" + Spree.translations.no_results + "</h4>");
          } else {
            _ref = data.products;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              product = _ref[_i];
              if (product.master.images[0] !== void 0 && product.master.images[0].small_url !== void 0) {
                product.image = product.master.images[0].small_url;
              }
              el.append(productTemplate({
                product: product
              }));
            }
            return $('#sorting_explanation').show();
          }
        }
      });
    });
  });

}).call(this);
