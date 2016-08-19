export function RealPersonDirective($log) {
    'ngInject';

    let directive = {
        restrict: 'E',
        // scope: {
        //     textCode: '=text'
        // },
        replace: true,
        templateUrl: 'app/components/realPerson/real-person.html',
        controller: RealPersonController,
        controllerAs: 'realPerson',
        bindToController: true,
        link: link.bind(this, $log)
    };

    return directive;
}

function link(log, scope, element, attr) {
    let divs = element.find('div');
    angular.forEach(divs, function(div){
        let divEl = angular.element(div);
        if (divEl.hasClass('realperson-regen')) {
            divEl.bind('click', function(){
                log.log("called");
            })
        }
    });
}

class RealPersonController {
    constructor() {
        'ngInject';
        const constant = {
            dots: [
                ['   *   ', '  * *  ', '  * *  ', ' *   * ', ' ***** ', '*     *', '*     *'],
                ['****** ', '*     *', '*     *', '****** ', '*     *', '*     *', '****** '],
                [' ***** ', '*     *', '*      ', '*      ', '*      ', '*     *', ' ***** '],
                ['****** ', '*     *', '*     *', '*     *', '*     *', '*     *', '****** '],
                ['*******', '*      ', '*      ', '****   ', '*      ', '*      ', '*******'],
                ['*******', '*      ', '*      ', '****   ', '*      ', '*      ', '*      '],
                [' ***** ', '*     *', '*      ', '*      ', '*   ***', '*     *', ' ***** '],
                ['*     *', '*     *', '*     *', '*******', '*     *', '*     *', '*     *'],
                ['*******', '   *   ', '   *   ', '   *   ', '   *   ', '   *   ', '*******'],
                ['      *', '      *', '      *', '      *', '      *', '*     *', ' ***** '],
                ['*     *', '*   ** ', '* **   ', '**     ', '* **   ', '*   ** ', '*     *'],
                ['*      ', '*      ', '*      ', '*      ', '*      ', '*      ', '*******'],
                ['*     *', '**   **', '* * * *', '*  *  *', '*     *', '*     *', '*     *'],
                ['*     *', '**    *', '* *   *', '*  *  *', '*   * *', '*    **', '*     *'],
                [' ***** ', '*     *', '*     *', '*     *', '*     *', '*     *', ' ***** '],
                ['****** ', '*     *', '*     *', '****** ', '*      ', '*      ', '*      '],
                [' ***** ', '*     *', '*     *', '*     *', '*   * *', '*    * ', ' **** *'],
                ['****** ', '*     *', '*     *', '****** ', '*   *  ', '*    * ', '*     *'],
                [' ***** ', '*     *', '*      ', ' ***** ', '      *', '*     *', ' ***** '],
                ['*******', '   *   ', '   *   ', '   *   ', '   *   ', '   *   ', '   *   '],
                ['*     *', '*     *', '*     *', '*     *', '*     *', '*     *', ' ***** '],
                ['*     *', '*     *', ' *   * ', ' *   * ', '  * *  ', '  * *  ', '   *   '],
                ['*     *', '*     *', '*     *', '*  *  *', '* * * *', '**   **', '*     *'],
                ['*     *', ' *   * ', '  * *  ', '   *   ', '  * *  ', ' *   * ', '*     *'],
                ['*     *', ' *   * ', '  * *  ', '   *   ', '   *   ', '   *   ', '   *   '],
                ['*******', '     * ', '    *  ', '   *   ', '  *    ', ' *     ', '*******'],
                ['  ***  ', ' *   * ', '*   * *', '*  *  *', '* *   *', ' *   * ', '  ***  '],
                ['   *   ', '  **   ', ' * *   ', '   *   ', '   *   ', '   *   ', '*******'],
                [' ***** ', '*     *', '      *', '     * ', '   **  ', ' **    ', '*******'],
                [' ***** ', '*     *', '      *', '    ** ', '      *', '*     *', ' ***** '],
                ['    *  ', '   **  ', '  * *  ', ' *  *  ', '*******', '    *  ', '    *  '],
                ['*******', '*      ', '****** ', '      *', '      *', '*     *', ' ***** '],
                ['  **** ', ' *     ', '*      ', '****** ', '*     *', '*     *', ' ***** '],
                ['*******', '     * ', '    *  ', '   *   ', '  *    ', ' *     ', '*      '],
                [' ***** ', '*     *', '*     *', ' ***** ', '*     *', '*     *', ' ***** '],
                [' ***** ', '*     *', '*     *', ' ******', '      *', '     * ', ' ****  ']],
            ALPHABETIC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            ALPHANUMERIC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            challengeClass: 'realperson-challenge',
            disabledClass: 'realperson-disabled',
            hashClass: 'realperson-hash',
            regenerateClass: 'realperson-regen',
            textClass: 'realperson-text',
            regenerate: 'Click to change',
            dot: '*',
            length: 6
        };
        this.text = this.generateHTML(constant);
    }

    generateHTML(constant) {
        var text = '';
        for (let i = 0; i < constant.length; i++) {
            text += constant.ALPHANUMERIC.charAt(Math.floor(Math.random() * constant.ALPHANUMERIC.length));
        }
        var html = '<div class="' + constant.challengeClass + '">' +
            '<div class="' + constant.textClass + '">';
        for (let i = 0; i < constant.dots[0].length; i++) {
            for (var j = 0; j < text.length; j++) {
                html += constant.dots[constant.ALPHANUMERIC.indexOf(text.charAt(j))][i].
                    replace(/ /g, '&#160;').replace(/\*/g, constant.dot) +
                    '&#160;&#160;';
            }
            html += '<br>';
        }
        return html;
    }
}
