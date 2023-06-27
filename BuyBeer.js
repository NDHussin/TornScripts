function addButton() {
    if ($('div.content-title > h4').size() > 0 && $('#buyItemBtn').size() < 1) {
      const button = `<div>
                        <button id="buyItemBtn" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Buy 100 Beer</button>
                        <span id="buyItemResult" style="font-size: 12px; font-weight: 100;"></span>
                      </div>`;
  
      $('div.content-title > h4').append(button);
  
      $('#buyItemBtn').on('click', async () => {
        $('#buyItemResult').text('');
        await getAction({
          type: 'post',
          action: 'shops.php',
          data: {
            step: 'buyShopItem',
            ID: 180,
            amount: 100
          },
          success: (str) => {
            try {
              const msg = JSON.parse(str);
              $('#buyItemResult').html(msg.text).css('color', msg.success ? 'green' : 'red');
            } catch (e) {
              console.log(e);
            }
          }
        });
      });
    }
  }
  
  (function() {
    'use strict';
  
    addButton();
  })();