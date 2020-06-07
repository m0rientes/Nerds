var link = document.querySelector(".link_write_us");
			var popup = document.querySelector(".form");
			var close = document.querySelector(".modal-close");

			link.addEventListener("click", function (evt) {
				evt.preventDefault();
				popup.classList.add("form-show");
			});

			close.addEventListener("click", function (evt) {
				evt.preventDefault();
				popup.classList.remove("form-show");
			});