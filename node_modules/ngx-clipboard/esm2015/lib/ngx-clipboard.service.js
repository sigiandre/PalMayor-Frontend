import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { WINDOW } from 'ngx-window-token';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-window-token";
/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */
let ClipboardService = class ClipboardService {
    constructor(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new Subject();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
    }
    configure(config) {
        this.config = config;
    }
    copy(content) {
        if (!this.isSupported || !content) {
            return this.pushCopyResponse({ isSuccess: false, content });
        }
        const copyResult = this.copyFromContent(content);
        if (copyResult) {
            return this.pushCopyResponse({ content, isSuccess: copyResult });
        }
        return this.pushCopyResponse({ isSuccess: false, content });
    }
    get isSupported() {
        return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
    }
    isTargetValid(element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    }
    /**
     * Attempts to copy from an input `targetElm`
     */
    copyFromInputElement(targetElm, isFocus = true) {
        try {
            this.selectTarget(targetElm);
            const re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    }
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    isCopySuccessInIE11() {
        const clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    copyFromContent(content, container = this.document.body) {
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        const toReturn = this.copyFromInputElement(this.tempTextArea, false);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement);
        }
        return toReturn;
    }
    /**
     * Remove temporary textarea if any exists.
     */
    destroy(container = this.document.body) {
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    }
    /**
     * Select the target html input element.
     */
    selectTarget(inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    }
    copyText() {
        return this.document.execCommand('copy');
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    clearSelection(inputElement, window) {
        inputElement && inputElement.focus();
        window.getSelection().removeAllRanges();
    }
    /**
     * Creates a fake textarea for copy command.
     */
    createTempTextArea(doc, window) {
        const isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        let ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        const yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    }
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    pushCopyResponse(response) {
        this.copySubject.next(response);
    }
    /**
     * @deprecated use pushCopyResponse instead.
     */
    pushCopyReponse(response) {
        this.pushCopyResponse(response);
    }
};
ClipboardService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [WINDOW,] }] }
];
ClipboardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ClipboardService_Factory() { return new ClipboardService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.WINDOW, 8)); }, token: ClipboardService, providedIn: "root" });
ClipboardService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT)), __param(1, Optional()), __param(1, Inject(WINDOW))
], ClipboardService);
export { ClipboardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNsaXBib2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNsaXBib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJM0M7O0dBRUc7QUFFSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQU16QixZQUFxQyxRQUFhLEVBQXNDLE1BQVc7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUFzQyxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBTDNGLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQXNCLENBQUM7UUFDakQsa0JBQWEsR0FBbUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUvRSxXQUFNLEdBQW9CLEVBQUUsQ0FBQztJQUVpRSxDQUFDO0lBRWhHLFNBQVMsQ0FBQyxNQUF1QjtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDL0Q7UUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksVUFBVSxFQUFFO1lBQ1os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O0lBRDVCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQU9sQixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQSxFQUF3QixXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7R0FOdEUsZ0JBQWdCLENBaUs1QjtTQWpLWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnbmd4LXdpbmRvdy10b2tlbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IENsaXBib2FyZFBhcmFtcywgSUNsaXBib2FyZFJlc3BvbnNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBoZWF2aWx5IGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5vcm9jaGEvY2xpcGJvYXJkLmpzXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGNvcHlTdWJqZWN0ID0gbmV3IFN1YmplY3Q8SUNsaXBib2FyZFJlc3BvbnNlPigpO1xyXG4gICAgcHVibGljIGNvcHlSZXNwb25zZSQ6IE9ic2VydmFibGU8SUNsaXBib2FyZFJlc3BvbnNlPiA9IHRoaXMuY29weVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBwcml2YXRlIHRlbXBUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgY29uZmlnOiBDbGlwYm9hcmRQYXJhbXMgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQ6IGFueSwgQE9wdGlvbmFsKCkgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luZG93OiBhbnkpIHt9XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ3VyZShjb25maWc6IENsaXBib2FyZFBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5KGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCB8fCAhY29udGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoQ29weVJlc3BvbnNlKHsgaXNTdWNjZXNzOiBmYWxzZSwgY29udGVudCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29weVJlc3VsdCA9IHRoaXMuY29weUZyb21Db250ZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIGlmIChjb3B5UmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hDb3B5UmVzcG9uc2UoeyBjb250ZW50LCBpc1N1Y2Nlc3M6IGNvcHlSZXN1bHQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hDb3B5UmVzcG9uc2UoeyBpc1N1Y2Nlc3M6IGZhbHNlLCBjb250ZW50IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQgJiYgISF0aGlzLmRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCgnY29weScpICYmICEhdGhpcy53aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVGFyZ2V0VmFsaWQoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhcmdldCBzaG91bGQgYmUgaW5wdXQgb3IgdGV4dGFyZWEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGVtcHRzIHRvIGNvcHkgZnJvbSBhbiBpbnB1dCBgdGFyZ2V0RWxtYFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29weUZyb21JbnB1dEVsZW1lbnQodGFyZ2V0RWxtOiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCwgaXNGb2N1cyA9IHRydWUpOiBib29sZWFuIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFRhcmdldCh0YXJnZXRFbG0pO1xyXG4gICAgICAgICAgICBjb25zdCByZSA9IHRoaXMuY29weVRleHQoKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbihpc0ZvY3VzID8gdGFyZ2V0RWxtIDogdW5kZWZpbmVkLCB0aGlzLndpbmRvdyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZSAmJiB0aGlzLmlzQ29weVN1Y2Nlc3NJbklFMTEoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyBhIGhhY2sgZm9yIElFMTEgdG8gcmV0dXJuIGB0cnVlYCBldmVuIGlmIGNvcHkgZmFpbHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0NvcHlTdWNjZXNzSW5JRTExKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGNsaXBib2FyZERhdGEgPSB0aGlzLndpbmRvd1snY2xpcGJvYXJkRGF0YSddO1xyXG4gICAgICAgIGlmIChjbGlwYm9hcmREYXRhICYmIGNsaXBib2FyZERhdGEuZ2V0RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBlbGVtZW50LCBzZXRzIGl0cyB2YWx1ZSBmcm9tIGB0ZXh0YCBwcm9wZXJ0eSxcclxuICAgICAqIGFuZCBtYWtlcyBhIHNlbGVjdGlvbiBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvcHlGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmJvZHkpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgdGVtcCB0ZXh0YXJlYSBzdGlsbCBiZWxvbmdzIHRvIHRoZSBjdXJyZW50IGNvbnRhaW5lci5cclxuICAgICAgICAvLyBJbiBjYXNlIHdlIGhhdmUgbXVsdGlwbGUgcGxhY2VzIHVzaW5nIG5neC1jbGlwYm9hcmQsIG9uZSBpcyBpbiBhIG1vZGFsIHVzaW5nIGNvbnRhaW5lciBidXQgdGhlIG90aGVyIG9uZSBpcyBub3QuXHJcbiAgICAgICAgaWYgKHRoaXMudGVtcFRleHRBcmVhICYmICFjb250YWluZXIuY29udGFpbnModGhpcy50ZW1wVGV4dEFyZWEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSh0aGlzLnRlbXBUZXh0QXJlYS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50ZW1wVGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB0aGlzLmNyZWF0ZVRlbXBUZXh0QXJlYSh0aGlzLmRvY3VtZW50LCB0aGlzLndpbmRvdyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIGEgRG9tIGVsZW1lbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRlbXBUZXh0QXJlYS52YWx1ZSA9IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvUmV0dXJuID0gdGhpcy5jb3B5RnJvbUlucHV0RWxlbWVudCh0aGlzLnRlbXBUZXh0QXJlYSwgZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jbGVhblVwQWZ0ZXJDb3B5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSh0aGlzLnRlbXBUZXh0QXJlYS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIHRlbXBvcmFyeSB0ZXh0YXJlYSBpZiBhbnkgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVzdHJveShjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5ib2R5KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudGVtcFRleHRBcmVhKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnRlbXBUZXh0QXJlYSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZUNoaWxkIGRvZXNuJ3QgcmVtb3ZlIHRoZSByZWZlcmVuY2UgZnJvbSBtZW1vcnlcclxuICAgICAgICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IHRoZSB0YXJnZXQgaHRtbCBpbnB1dCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlbGVjdFRhcmdldChpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29weVRleHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdmVzIGZvY3VzIGF3YXkgZnJvbSBgdGFyZ2V0YCBhbmQgYmFjayB0byB0aGUgdHJpZ2dlciwgcmVtb3ZlcyBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbihpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCB3aW5kb3c6IFdpbmRvdyk6IHZvaWQge1xyXG4gICAgICAgIGlucHV0RWxlbWVudCAmJiBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBmb3IgY29weSBjb21tYW5kLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRlbXBUZXh0QXJlYShkb2M6IERvY3VtZW50LCB3aW5kb3c6IFdpbmRvdyk6IEhUTUxUZXh0QXJlYUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGlzUlRMID0gZG9jLmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09PSAncnRsJztcclxuICAgICAgICBsZXQgdGE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgdGEgPSBkb2MuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXHJcbiAgICAgICAgdGEuc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7XHJcbiAgICAgICAgLy8gUmVzZXQgYm94IG1vZGVsXHJcbiAgICAgICAgdGEuc3R5bGUuYm9yZGVyID0gJzAnO1xyXG4gICAgICAgIHRhLnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgICAgICAgdGEuc3R5bGUubWFyZ2luID0gJzAnO1xyXG4gICAgICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxyXG4gICAgICAgIHRhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0YS5zdHlsZVtpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCddID0gJy05OTk5cHgnO1xyXG4gICAgICAgIC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgY29uc3QgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIHRhLnN0eWxlLnRvcCA9IHlQb3NpdGlvbiArICdweCc7XHJcbiAgICAgICAgdGEuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcclxuICAgICAgICByZXR1cm4gdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoZXMgY29weSBvcGVyYXRpb24gcmVzcG9uc2UgdG8gY29weVN1YmplY3QsIHRvIHByb3ZpZGUgZ2xvYmFsIGFjY2Vzc1xyXG4gICAgICogdG8gdGhlIHJlc3BvbnNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVzaENvcHlSZXNwb25zZShyZXNwb25zZTogSUNsaXBib2FyZFJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb3B5U3ViamVjdC5uZXh0KHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSBwdXNoQ29weVJlc3BvbnNlIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoQ29weVJlcG9uc2UocmVzcG9uc2U6IElDbGlwYm9hcmRSZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHVzaENvcHlSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICB9XHJcbn1cclxuIl19