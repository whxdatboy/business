import $ from 'jquery';
import {lockScroll, unlockScroll} from "./scroll-lock";
import {createElement} from "./utils";
// import {isLocalhost} from "../constants";

class Modal {
    constructor() {
        this.modalSelector = '[data-modal]';
        this.body = $('body');
        this.doc = $(document);
        this.closeTimeout = 300;
        this.activeClass = 'is-active';
        this.loadingClass = 'modal-loading';
    }

    isOtherOpen() {
        return $(this.modalSelector).filter(`.${this.activeClass}`).length;
    }

    open (id) {
        const $modal = $(`[data-modal=${id}]`);

        lockScroll();

        $modal.addClass(this.activeClass).focus();
        this.body.addClass('modal-open');
        this.doc.trigger('modal-open', [id]);
    }

    openWithAjax (id, params) {
        const isModalExist = $(`[data-modal=${id}]`).length;

        if (isModalExist) {
            this.open(id);
            return;
        }

        const ajaxUrl = isLocalhost ? `/ajax/${id}.html` : '/local/ajax/';
        const ajaxMethod = isLocalhost ? `get` : 'post';

        $.ajax({
            url: ajaxUrl,

            method: ajaxMethod,
            dataType: "json",
            data: {
                action: 'LoadBlocks/getModal',
                modalID: id,
                params
            },
            beforeSend: () => {
                this.showLoader();
            },
            success: (data) => {
                const dataHtml = createElement(data.HTML);
                document.body.insertAdjacentElement('beforeend', dataHtml);
                this.onModalLoaded(dataHtml);
                this.open(id);

                if($(`[data-modal=${id}]`).find('[data-input-phone]').length) {
                    $('[data-input-phone]').mask('+7 (999) 999 99 99');
                }
            },
            error: () => {
                this.showError();
            },
            complete: () => {
                this.hideLoader();
            }
        });

    }

    close(id) {
        const $modal = $(`[data-modal=${id}]`),
            dataOnClose = $modal.data('modal-onclose');

        if (id) {
            $modal.removeClass(this.activeClass);
        } else {
            $('[data-modal]').removeClass(this.activeClass);
        }

        if (!this.isOtherOpen()) {
            setTimeout(() => {
                unlockScroll();
                this.body.removeClass('modal-open');

                if (dataOnClose === 'remove') {
                    $modal.remove();
                }
            }, this.closeTimeout);
        }

        this.doc.trigger('modal-close', [id]);
    }

    toggle(id) {
        const $modal = $(`[data-modal=${id}]`);
        const isActive = $modal.hasClass(this.activeClass);
        if (isActive) {
            this.close(id);
        } else {
            this.open(id);
        }
    }

    showLoader() {
        let $loader = $(`.modal-loader`);

        if (!$loader.length) {
            $loader = $(`<div class="modal-loader" />`);
            this.body.append($loader);
        }

        this.body.addClass(this.loadingClass);
    }

    hideLoader() {
        this.body.removeClass(this.loadingClass);
    }

    showError() {
        let $errorModal = $(`[data-modal="modal-error"]`);

        if (!$errorModal.length) {
            $errorModal = $(`<div class="modal" data-modal="modal-error"><div class="modal__error">Произошла ошибка</div></div>`);
            this.body.append($errorModal);
        }

        this.open('modal-error');
    }

    onModalLoaded(dataHtml) {}
}

const modal = new Modal();

window.modal = modal;

export const modalsInit = () => {
    const $document = $(document);

    $document.on('click', '[data-modal-open]', function (e) {
      console.log('нажал на кнопку')
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-open');
        modal.open(modalId);
    });

    $document.on('click', '[data-modal-ajax-open]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-ajax-open'),
            params = $this.data('modal-params');

        modal.openWithAjax(modalId, params);
    });

    $document.on('click', '[data-modal-close]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-close');
        modal.close(modalId);
    });

    $document.on('click', '[data-modal]', function (e) {
        if ($(e.target).closest('[data-modal-inner]').length) return;
        e.preventDefault();
        const modalId = $(e.currentTarget).data('modal');
        modal.close(modalId);
    });

    $document.on('click', '[data-modal-toggle]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-toggle');

        $this.toggleClass('is-active');

        if($this.hasClass('is-active')){
            modal.open(modalId);
        }else {
            modal.close(modalId);
        }
    });
}

modalsInit();

export {
    modal
};
