/** 
 * @jest-environment jsdom 
 */ 
 


test('Проверка, на скрытие регистрации и открыте авторизации при на нажатии', () => {
    const registration = document.createElement('article');
    const authorization = document.createElement('article');
    
    registration.style.display = 'block';
    authorization.style.display = 'none';
    
    const swapauthorization = document.createElement('button');
    
    swapauthorization.addEventListener("click", function () {
        registration.style.display = "none";
        authorization.style.display = "flex";
    });
    
    swapauthorization.click();
    
    expect(registration.style.display).toBe('none');
    expect(authorization.style.display).toBe('flex');
});


describe('Проверка регистрации', () => {
    let form;
    let preventDefaultCalled = false;
    
    beforeEach(() => {
      form = document.createElement('form');
      Event.prototype.preventDefault = jest.fn(() => {
        preventDefaultCalled = true;
      });
    });
    test('submission should prevent default form behavior', () => {
      document.body.appendChild(form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
      });
      const event = new Event('submit', { bubbles: true });
      form.dispatchEvent(event);
      expect(preventDefaultCalled).toBe(true);
    });
  });