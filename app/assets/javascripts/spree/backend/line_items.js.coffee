$(document).ready ->
  #handle edit click
  $('a.edit-line-item').click toggleLineItemEdit

  #handle cancel click
  $('a.cancel-line-item').click toggleLineItemCancel

  #handle save click
  $('a.save-line-item').click ->
    save = $ this
    line_item_id = save.data('line-item-id')
    quantity = parseInt(save.parents('tr').find('input.line_item_quantity').val())
    price = parseFloat(save.parents('tr').find('input.line_item_price').val())

    toggleItemEdit()
    adjustLineItem(line_item_id, quantity, price)
    false

  # handle delete click
  $('a.delete-line-item').click ->
    if confirm(Spree.translations.are_you_sure_delete)
      del = $(this);
      line_item_id = del.data('line-item-id');

      toggleItemEdit()
      deleteLineItem(line_item_id)

toggleLineItemCancel = ->
  link = $(this);
  link.parent().find('a.edit-line-item').show();
  link.parent().find('a.cancel-line-item').hide();
  link.parent().find('a.save-line-item').hide();
  link.parent().find('a.delete-line-item').show();
  link.parents('tr').find('td.line-item-qty-show').show();
  link.parents('tr').find('td.line-item-qty-edit').addClass('hidden');
  link.parents('tr').find('td.line-item-price-edit').addClass('hidden');
  false
toggleLineItemEdit = ->
  link = $(this);
  link.parent().find('a.edit-line-item').hide();
  link.parent().find('a.cancel-line-item').show();
  link.parent().find('a.save-line-item').show();
  link.parent().find('a.delete-line-item').hide();
  link.parents('tr').find('td.line-item-qty-show').hide()
  link.parents('tr').find('td.line-item-qty-edit').removeClass('hidden');
  link.parents('tr').find('td.line-item-price-edit').removeClass('hidden');
  false

lineItemURL = (line_item_id) ->
  url = Spree.routes.orders_api + "/" + order_number + "/line_items/" + line_item_id + ".json"

adjustLineItem = (line_item_id, quantity, price) ->
  url = lineItemURL(line_item_id)
  $.ajax(
    type: "PUT",
    url: Spree.url(url),
    data:
      line_item:
        quantity: quantity,
        price: price,
      token: Spree.api_key
  ).done (msg) ->
    window.Spree.advanceOrder()

deleteLineItem = (line_item_id) ->
  url = lineItemURL(line_item_id)
  $.ajax(
    type: "DELETE"
    url: Spree.url(url)
    data:
      token: Spree.api_key
  ).done (msg) ->
    $('#line-item-' + line_item_id).remove()
    if $('.line-items tr.line-item').length == 0
      $('.line-items').remove()
    window.Spree.advanceOrder()
