  function createComponentName(str) {
    str = str.split('/').pop().split('.')[0];
    return'my-' + str.toLowerCase();
  }
  
  // 递归注册组件
  function RecursiveRegister(links){
    let links = document.querySelectorAll('link[rel="import"]');
    links.forEach(function(item) {
      const componentName = createComponentName(item.href);  
      var tmpl = HTMLImports.importForElement(document.currentScript).content;
      const tmpl = item.querySelector('template').content;
      RecursiveRegister(item.querySelectorAll('link[rel="import"]'));
  
      let componentProto = Object.create(HTMLElement.prototype);
      componentProto.createdCallback = function() {
        this.appendChild(document.importNode(tmpl, true));
        let root = this.attachShadow({ mode:'closed' });
        root.appendChild(document.importNode(tmpl, true));
      };
      customElements.define(componentName, { prototype: componentProto });
    });
  }
  RecursiveRegister(document.querySelectorAll('link[rel="import"]'));