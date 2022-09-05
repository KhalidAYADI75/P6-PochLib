class DomConstructor {

    static addDomElements() {
        this.CdnLink();
        this.searchBookButton();
        this.divSearch();
        this.searchForm();
        this.resultSearch();
        this.bookmarkContent();
    }

    static CdnLink() {
        var headID = document.getElementsByTagName("head")[0];
        var cdn = document.createElement('link');
        cdn.rel = 'stylesheet';
        cdn.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css";
        headID.appendChild(cdn);
    }

    static searchBookButton() {
        let hrTag = document.getElementsByTagName('hr')[0];
        let btn = document.createElement("button");
        btn.innerHTML = "Ajouter un livre";
        btn.classList.add('btn');
        btn.id = 'bt_add';
        let parentDiv = document.getElementById('myBooks');
        parentDiv.insertBefore(btn,hrTag);
    }

    static divSearch() {
        let hrTag = document.getElementsByTagName('hr')[0];
        let div = document.createElement("div");
        div.id = 'divformsearch';
        let parentDiv = document.getElementById('myBooks');
        parentDiv.insertBefore(div,hrTag);
    }

    static searchForm() {
        let parentDiv = document.getElementById('divformsearch');
        let form = document.createElement("form");
        form.id = 'formsearch';
        this.labelInForm("Titre du livre",form);
        this.inputInForm("title_book",form);
        this.labelInForm("Auteur",form);
        this.inputInForm("author",form);
        this.buttonInForm("btn",form);
        this.buttonInForm("btn-cancel",form);
        parentDiv.appendChild(form);
    }

    static resultSearch() {
        let parentDiv = document.getElementById('divformsearch');
        var div = document.createElement("div");
        div.setAttribute("id", "resultSearch");
        var h2 = document.createElement("h2");
        h2.innerHTML = "Résultats de recherche";
        div.appendChild(h2);
        var divGrid = document.createElement("div");
        divGrid.setAttribute("class","grid");
        divGrid.setAttribute("id","container");
        div.appendChild(divGrid);
        parentDiv.appendChild(div);

    }

    static bookmarkContent() {
        let parentDiv = document.getElementById('content');
        var divGrid = document.createElement("div");
        divGrid.setAttribute("class","grid");
        divGrid.setAttribute("id","pochlistecontent");
        parentDiv.appendChild(divGrid);
    }

    static labelInForm(labelText,form) {
        var label = document.createElement('label');
        label.innerHTML = labelText;
        form.appendChild(label);
    }

    static inputInForm(inputName,form) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", inputName);
        input.setAttribute("id", inputName);
        form.appendChild(input);
    }

    static buttonInForm(theClass,form) {
        var div = document.createElement("div");
        let btn = document.createElement("button");
        switch (theClass) {
            case 'btn' : {
                btn.innerHTML = "Rechercher";
                btn.setAttribute("class", "btn");
                btn.setAttribute("id", "bt_search");
                btn.setAttribute("type", "submit");
                break;
            }
            case 'btn-cancel' : {
                btn.innerHTML = "Annuler";
                btn.setAttribute("class", "btn-cancel");
                btn.setAttribute("id", "bt_cancel");
                btn.setAttribute("type", "button");
            }
        }
        div.appendChild(btn);
        form.appendChild(div);
    }
}