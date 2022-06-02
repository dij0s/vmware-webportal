import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'

import './Confirmation.css'

export default function Confirmation () {
    const [cookies] = useCookies()
    const vmName = cookies['v-last']
    useEffect(() => {
        if (vmName === null) window.location.assign('/')
    }, [vmName])

    const handleBackButton = () => {
        window.location.assign('/portal')                
    }

    return (
        <div id='request-confirmation'>
            <header id='request-confirmation-header'>
                <h1 id='request-confirmation-title'>Votre demande nous a &eacute;t&eacute; transmise avec succ&egrave;s</h1>
                <div id='request-confirmation-logo'></div>
            </header>
            <div id='request-confirmation-wrapper'>
                <div id='request-confirmation-more'>
                    <div id='request-confirmation-more-wrapper'>
                        <div id='request-confirmation-more-text'>
                            <p id='request-confirmation-more-text-main'>Les identifiants de la machine virtuelle <b>{vmName}</b> vous parviendrons, par e-mail, dans les plus brefs délais.</p>
                            <p id='request-confirmation-more-text-minor'>Votre Service Informatique</p>
                        </div>

                        <div id='request-confirmation-back' onClick={() => {handleBackButton()}}>
                            <span id='request-confirmation-back-text'>Soumettre une nouvelle demande</span>
                        </div>
                    </div>
                </div>
                <div id='request-confirmation-design'>
                    <svg width="570" height="683" viewBox="0 0 570 683" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="reshot-illustration-sending-money-by-email-QJN9E65R37 1" clipPath="url(#clip0_86_41)">
                        <g id="g10">
                        <g id="g12">
                        <path id="path14" d="M335.76 384.373H570.003V198.49H335.76V384.373Z" fill="#EFF7FD"/>
                        <path id="path16" d="M335.76 220.639H570.003V198.49H335.76V220.639Z" fill="#A4C8EC"/>
                        <path id="path18" d="M553.755 209.571C553.755 212.011 555.737 214.001 558.191 214.001C560.633 214.001 562.623 212.011 562.623 209.571C562.623 207.112 560.633 205.139 558.191 205.139C555.737 205.139 553.755 207.112 553.755 209.571Z" fill="#33C748"/>
                        <path id="path20" d="M539.727 209.571C539.727 212.011 541.706 214.001 544.159 214.001C546.599 214.001 548.579 212.011 548.579 209.571C548.579 207.112 546.599 205.139 544.159 205.139C541.706 205.139 539.727 207.112 539.727 209.571Z" fill="#FDBC40"/>
                        <path id="path22" d="M525.696 209.571C525.696 212.011 527.676 214.001 530.125 214.001C532.567 214.001 534.554 212.011 534.554 209.571C534.554 207.112 532.567 205.139 530.125 205.139C527.676 205.139 525.696 207.112 525.696 209.571Z" fill="#F45450"/>
                        <path id="path24" d="M46.9943 570.803C43.3119 570.803 37.501 569.963 32.4104 565.53C25.0834 559.161 21.9141 547.826 22.9831 531.859C23.6974 521.078 27.9414 510.167 32.4328 498.606C40.0016 479.164 48.568 457.13 44.0873 427.99L52.4131 426.709C57.2336 458.083 47.8349 482.243 40.2938 501.658C35.855 513.067 32.0172 522.928 31.3843 532.414C30.5241 545.367 32.7578 554.597 37.8653 559.104C42.6964 563.381 48.7435 562.282 48.9989 562.234L50.6877 570.487C50.5333 570.518 49.1178 570.803 46.9943 570.803Z" fill="#3B6D83"/>
                        <path id="path26" d="M111.578 637.626L119.782 650.137L50.8783 672.205C50.8783 672.205 46.2728 667.804 63.1832 658.968C82.8641 648.666 111.578 637.626 111.578 637.626Z" fill="#8EC1DD"/>
                        <path id="path28" d="M123.815 637.626L115.611 650.137L184.514 672.205C184.514 672.205 189.115 667.804 172.208 658.968C152.524 648.666 123.815 637.626 123.815 637.626" fill="#8EC1DD"/>
                        <path id="path30" d="M124.896 651.672H110.498V600.416H124.896V651.672" fill="#8EC1DD"/>
                        <path id="path32" d="M110.659 640.265L117.677 652.199L58.695 673.258C58.695 673.258 54.7571 669.06 69.2218 660.622C86.0783 650.795 110.659 640.265 110.659 640.265Z" fill="#B3DAF4"/>
                        <path id="path34" d="M124.73 640.265L117.719 652.199L176.698 673.258C176.698 673.258 180.636 669.06 166.165 660.622C149.313 650.795 124.73 640.265 124.73 640.265" fill="#B3DAF4"/>
                        <path id="path36" d="M65.3741 678.004C65.3741 680.764 63.1292 683 60.3721 683C57.6089 683 55.3669 680.764 55.3669 678.004C55.3669 675.235 57.6089 672.993 60.3721 672.993C63.1292 672.993 65.3741 675.235 65.3741 678.004" fill="#17233F"/>
                        <path id="path38" d="M179.664 678.004C179.664 680.764 177.412 683 174.652 683C171.888 683 169.65 680.764 169.65 678.004C169.65 675.235 171.888 672.993 174.652 672.993C177.412 672.993 179.664 675.235 179.664 678.004" fill="#17233F"/>
                        <path id="path40" d="M53.2618 678.004C53.2618 680.764 51.0235 683 48.2599 683C45.4958 683 43.2542 680.764 43.2542 678.004C43.2542 675.235 45.4958 672.993 48.2599 672.993C51.0235 672.993 53.2618 675.235 53.2618 678.004" fill="#3B6D83"/>
                        <path id="path42" d="M191.769 678.004C191.769 680.764 189.528 683 186.765 683C184.007 683 181.771 680.764 181.771 678.004C181.771 675.235 184.007 672.993 186.765 672.993C189.528 672.993 191.769 675.235 191.769 678.004" fill="#3B6D83"/>
                        <path id="path44" d="M122.777 600.065H112.246V581.633H122.777V600.065Z" fill="#3B6D83"/>
                        <path id="path46" d="M130.677 571.897C130.677 577.562 126.076 582.16 120.409 582.16H114.615C108.947 582.16 104.347 577.562 104.347 571.897C104.347 566.217 108.947 561.625 114.615 561.625H120.409C126.076 561.625 130.677 566.217 130.677 571.897Z" fill="#3B6D83"/>
                        <path id="path48" d="M195.793 562.505C196.038 561.295 196.18 553.716 196.18 552.414C196.18 544.123 190.827 537.406 184.21 537.406H50.8069C44.2018 537.406 38.8384 544.123 38.8384 552.414C38.8384 553.716 38.9811 561.295 39.238 562.505H195.793" fill="#9DD1F2"/>
                        <path id="path50" d="M37.6067 566.567C37.6067 569.108 39.0862 571.169 40.9252 571.169H194.098C195.936 571.169 197.417 569.108 197.417 566.567C197.417 564.032 195.936 561.974 194.098 561.974H40.9252C39.0862 561.974 37.6067 564.032 37.6067 566.567Z" fill="#3B6D83"/>
                        <path id="path52" d="M45.0728 485.486C48.3676 485.727 69.2759 486.097 72.8789 486.142C95.7716 486.418 115.484 482.123 116.583 476.486C121.1 453.064 121.305 429.041 117.175 405.605C116.196 399.973 96.1886 395.677 72.8125 395.962C69.1428 396.007 47.7998 396.377 44.4426 396.625C51.6136 425.834 51.821 456.267 45.0728 485.486" fill="#9DD1F2"/>
                        <path id="path54" d="M41.9284 396.623C39.3675 396.653 37.5791 397.87 37.936 399.338C44.3094 426.808 44.5473 455.308 38.6541 482.783C38.3291 484.257 40.1015 485.471 42.6077 485.5C45.1151 485.537 47.4378 484.359 47.7524 482.884C53.7266 455.34 53.5455 426.777 47.2086 399.237C46.8637 397.76 44.5012 396.589 41.9284 396.623" fill="#3B6D83"/>
                        <path id="path56" d="M40.9078 485.441C41.5828 485.659 46.1198 485.827 46.9118 485.843C51.8993 485.903 57.0367 481.501 58.0283 475.961C62.1808 452.888 62.0809 429.229 57.7052 406.157C56.6668 400.61 51.4041 396.218 46.314 396.277C45.5086 396.29 40.8952 396.463 40.2041 396.683C47.3892 425.853 47.6222 456.26 40.9078 485.441Z" fill="#8CC4EC"/>
                        <path id="path58" d="M169.498 320.248C169.498 320.248 214.165 277.044 218.534 275.588C222.903 274.131 233.585 272.189 233.585 272.189C233.585 272.189 205.911 318.791 200.085 330.443C194.259 342.093 169.498 320.248 169.498 320.248" fill="#ED8656"/>
                        <path id="path60" d="M89.3884 379.958C89.3884 379.958 78.3702 352.557 90.8447 345.006C103.319 337.455 129.909 331.065 139.601 329.487C158.987 326.332 178.724 320.409 184.409 330.975C190.095 341.54 192.761 348.207 188.257 350.445C183.753 352.684 140.106 406.803 89.3884 379.958Z" fill="#3FAC3D"/>
                        <path id="path62" d="M189.072 673.147V682.91H237.197C237.197 682.91 229.525 669.66 213.483 666.871C197.442 664.081 189.072 673.147 189.072 673.147" fill="#241717"/>
                        <path id="path64" d="M147.923 488.347C147.923 488.347 255.078 481.052 288.848 491.117C300.564 494.609 308.241 641.053 308.241 641.053L294.984 643.843C294.984 643.843 327.067 655.001 343.806 655.001C360.544 655.001 363.334 667.553 363.334 667.553L283.815 670.342L281.035 659.184L253.935 540.634L154.897 542.741L147.923 488.347" fill="#241717"/>
                        <path id="path66" d="M75.387 523.216C75.387 523.216 43.3043 528.794 36.3298 466.032C29.3558 403.27 27.2632 353.061 27.2632 353.061L67.0182 332.14H101.89C101.89 332.14 131.184 341.903 133.973 355.85C136.763 369.797 126.999 425.585 131.184 435.349C135.368 445.111 150.712 477.19 150.712 477.19L75.387 523.216Z" fill="#328A30"/>
                        <path id="path68" d="M98.4033 431.862L124.325 413.602L129.092 410.244C129.092 410.244 137.461 422.796 133.973 431.165C130.486 439.533 105.378 445.111 101.193 444.414C97.0085 443.717 98.4033 431.862 98.4033 431.862" fill="#F6AB7A"/>
                        <path id="path70" d="M144.435 413.73L142.343 431.862L131.183 435.349L129.092 410.244L144.435 413.73Z" fill="#ED8656"/>
                        <path id="path72" d="M64.228 519.031C64.228 519.031 76.7824 478.585 115.84 473.006C154.897 467.427 161.871 467.427 161.871 467.427C161.871 467.427 188.375 503.689 216.273 659.897C217.369 666.037 181.4 676.634 181.4 676.634L139.553 537.163C139.553 537.163 86.5469 553.899 64.228 519.031Z" fill="#2C306C"/>
                        <path id="path74" d="M134.671 505.781L181.4 676.634" stroke="#6C7986" strokeWidth="3.27415" strokeMiterlimit="10"/>
                        <path id="path76" d="M46.0942 367.705C46.0942 367.705 32.1452 347.481 26.5657 353.061C20.9862 358.639 -1.33264 420.007 0.0626422 439.533C1.45738 459.058 2.81829 474.099 16.8014 475.098C65.6227 478.585 103.983 450.691 103.983 450.691L100.496 422.099C100.496 422.099 44.6995 425.585 40.5147 429.77C36.33 433.954 44.6995 388.626 46.0942 367.705" fill="#3FAC3D"/>
                        <path id="path78" d="M157.845 326.073L181.149 307.141C181.149 307.141 197.037 316.307 202.274 321.684C205.172 324.658 210.281 323.852 210.281 328.221C210.281 332.59 176.067 363.215 176.067 363.215L157.845 326.073Z" fill="#3FAC3D"/>
                        <path id="path80" d="M226.302 259.082L237.226 244.519C237.226 244.519 240.382 242.092 239.896 244.277C239.411 246.461 236.012 256.17 235.041 258.111C234.92 258.354 234.92 258.631 235.013 258.936C235.667 261.069 244.66 264.695 244.873 267.456C245.116 270.612 241.667 273.808 239.502 276.558C230.52 287.966 222.418 280.927 222.418 280.927C222.418 280.927 216.107 282.869 217.563 273.646C219.019 264.422 226.302 259.082 226.302 259.082" fill="#ED8656"/>
                        <path id="path82" d="M217.107 275.739L219.748 264.665L227.758 260.629L234.222 265.363C234.222 265.363 233.585 267.577 230.186 266.364C226.787 265.15 225.089 267.092 225.089 267.092L226.211 270.551C226.211 270.551 226.333 275.254 217.107 275.739" fill="#F6AB7A"/>
                        <path id="path84" d="M245.328 266.728L235.041 258.111L233.858 263.542L238.137 270.096C238.137 270.096 243.326 272.371 245.328 266.728Z" fill="#F6AB7A"/>
                        <path id="path86" d="M69.7662 309.299C66.915 317.104 61.7713 331.133 58.6487 339.331C61.1198 341.055 80.0101 342.49 87.4767 339.331C88.2597 332.27 90.7175 322.176 92.1333 316.709L69.7662 309.299" fill="#F6AB7A"/>
                        <path id="path88" d="M109.603 314.758C110.374 318.263 108.15 321.711 104.66 322.474L76.1463 328.675C72.6603 329.44 69.2031 327.215 68.4362 323.718L59.2557 281.504C58.485 278.012 60.7075 274.553 64.2134 273.786L92.7138 267.603C96.2082 266.833 99.6572 269.05 100.425 272.551L109.603 314.758" fill="#F6AB7A"/>
                        <path id="path90" d="M102.356 281.242C102.356 281.242 105.295 276.332 105.449 273.66C105.533 272.317 103.254 267.786 99.6822 266.626C96.111 265.475 94.2258 269.471 94.2258 269.471C94.2258 269.471 99.8931 271.185 100.385 272.182C100.879 273.187 102.356 281.242 102.356 281.242" fill="#1F3B57"/>
                        <path id="path92" d="M60.4821 301.123C60.4821 301.123 52.6511 285.842 52.4023 280.924C52.1633 275.987 51.9764 272.582 57.6571 270.793C66.1737 268.121 66.6861 269.937 70.3322 266.373C73.9824 262.829 80.1938 254.814 82.6642 253.615C86.7942 251.602 93.9185 251.577 95.9643 259.703C97.4758 265.7 101.61 266.347 101.552 266.6C101.37 267.406 99.9372 268.444 97.4758 270.425C90.4108 276.109 85.8345 277.934 79.4276 277.664C73.0052 277.408 60.9655 276.43 60.6209 281.205C60.2766 285.979 63.788 299.586 63.4977 300.752C63.1883 301.927 61.7172 301.697 60.4821 301.123" fill="#234465"/>
                        <path id="path94" d="M72.2202 311.846C72.4689 313.012 71.7243 314.165 70.5628 314.417L64.4063 315.752C63.2408 316.013 62.0886 315.265 61.8316 314.106L59.3813 302.853C59.1362 301.683 59.8669 300.526 61.0325 300.27L67.1929 298.94C68.3663 298.688 69.5106 299.426 69.7545 300.585L72.2202 311.846" fill="#F6AB7A"/>
                        <path id="path96" d="M108.928 303.846C109.19 305.024 108.447 306.173 107.286 306.422L101.134 307.763C99.963 308.018 98.8098 307.277 98.5535 306.104L96.111 294.853C95.8602 293.698 96.5922 292.535 97.7579 292.283L103.918 290.938C105.081 290.694 106.234 291.44 106.485 292.6L108.928 303.846" fill="#F6AB7A"/>
                        <path id="path98" d="M64.02 304.237C64.02 304.237 67.6321 320.847 68.8378 326.392C69.9265 331.404 74.324 341.965 102.624 335.794C119.379 332.165 116.091 319.983 115.206 315.935C114.536 312.857 109.044 304.392 106.892 303.01C106.819 302.969 108.382 309.871 108.382 309.871C108.382 309.871 103.441 303.949 95.4811 305.681C82.6308 308.472 81.3477 316.627 75.6567 317.727C71.2682 318.572 66.4562 312.183 64.02 304.237Z" fill="#234465"/>
                        <path id="path100" d="M92.5734 317.733L101.364 315.818C102.529 315.57 103.265 314.417 103.014 313.243L102.745 312.01L89.7292 314.853L89.9982 316.08C90.2573 317.245 91.4056 317.987 92.5734 317.733Z" fill="#F6AB7A"/>
                        <path id="path102" d="M146.802 682.112H131.054L157.033 430.55H179.862L146.802 682.112Z" fill="#1F3B57"/>
                        <path id="path104" d="M178.342 442.145L168.328 518.329L156.451 436.227L157.033 430.55H176.988L178.342 442.145" fill="#212A53"/>
                        <path id="path106" d="M357.748 682.112H342.006L367.984 430.55H390.813L357.748 682.112Z" fill="#1F3B57"/>
                        <path id="path108" d="M389.289 442.145L379.278 518.329L367.394 436.227L367.984 430.55H387.938L389.289 442.145" fill="#212A53"/>
                        <path id="path110" d="M523.059 682.112H538.805L512.828 430.55H489.997L523.059 682.112Z" fill="#1F3B57"/>
                        <path id="path112" d="M491.52 442.145L522.076 519.781L513.41 436.227L512.827 430.55H492.872L491.52 442.145" fill="#212A53"/>
                        <path id="path114" d="M345.036 437.084H534.865V422.383H345.036V437.084" fill="#516DBE"/>
                        <path id="path116" d="M138.263 437.084H353.815V422.383H138.263V437.084" fill="#8FB0E1"/>
                        <path id="path118" d="M149.874 417.991C149.854 417.953 149.83 417.908 149.811 417.872L149.874 414.157H303.705V417.872C303.705 417.872 303.73 417.953 303.705 417.991L303.313 418.683C301.336 421.904 297.79 422.482 293.728 422.482H159.856C155.793 422.482 152.253 421.904 150.27 418.683L149.874 417.991Z" fill="#424545"/>
                        <path id="path120" d="M186.947 418.618C186.947 418.618 186.972 418.683 186.947 418.72L186.565 419.282C185.957 420.111 185.193 420.725 184.316 421.172H160.925C157.017 421.172 153.606 420.706 151.704 418.102L151.336 417.535C151.308 417.505 151.288 417.474 151.266 417.441L151.305 415.613H186.947V418.618" fill="#5E6262"/>
                        <path id="path122" d="M207.713 417.642H284.578V415.017H207.713V417.642Z" fill="#5E6262"/>
                        <path id="path124" d="M187.8 414.023L207.745 338.445C208.273 336.445 210.314 334.83 212.306 334.83H320.233C322.224 334.83 323.417 336.445 322.889 338.445L302.946 414.023H187.8Z" fill="#424545"/>
                        <path id="path126" d="M248.832 374.429C247.813 378.284 250.124 381.414 253.976 381.414C257.84 381.414 261.789 378.284 262.81 374.429C263.826 370.565 261.528 367.434 257.664 367.434C253.805 367.434 249.851 370.565 248.832 374.429Z" fill="#5E6262"/>
                        <path id="path128" d="M381.524 163.53C386.601 163.53 386.601 173.558 391.683 173.558C396.762 173.558 396.762 163.53 401.841 163.53C406.912 163.53 406.912 173.558 411.987 173.558C417.067 173.558 417.067 163.53 422.144 163.53C427.213 163.53 427.213 173.558 432.292 173.558C437.367 173.558 437.367 163.53 442.446 163.53C447.524 163.53 447.524 173.558 452.603 173.558C457.683 173.558 457.683 163.53 462.762 163.53C467.841 163.53 467.841 173.558 472.921 173.558C477.997 173.558 477.997 163.53 483.075 163.53C488.154 163.53 488.154 173.558 493.234 173.558C498.315 173.558 498.315 163.53 503.397 163.53C508.482 163.53 508.482 173.558 513.568 173.558C518.651 173.558 518.651 163.53 523.742 163.53" stroke="#284197" strokeWidth="3.91399" strokeMiterlimit="10"/>
                        <path id="path130" d="M157.134 129.769H299.35" stroke="#CBE6F8" strokeWidth="3.91399" strokeMiterlimit="10"/>
                        <path id="path132" d="M111.307 143.199H253.524" stroke="#CBE6F8" strokeWidth="3.91399" strokeMiterlimit="10"/>
                        <path id="path134" d="M136.592 156.628H278.81" stroke="#CBE6F8" strokeWidth="3.91399" strokeMiterlimit="10"/>
                        <path id="path144" d="M400.147 63.2202H280.722V7.03058e-05H400.147V63.2202Z" fill="#CBE6F8"/>
                        <path id="path146" d="M323.945 90.1V47.9984H281.841L323.945 90.1Z" fill="#CBE6F8"/>
                        <path id="path148" d="M379.099 28.6874H301.779V22.9441H379.099V28.6874Z" fill="#EFF7FD"/>
                        <path id="path150" d="M379.099 43.9963H301.779V38.2592H379.099V43.9963Z" fill="#EFF7FD"/>
                        <path id="path162" d="M392.692 253.053L407.297 278.602L421.9 304.155L434.379 290.127L446.861 276.102L419.781 264.577L392.692 253.053Z" fill="#A4C8EC"/>
                        <path id="path164" d="M406.803 296.277C406.803 322.921 428.404 344.522 455.059 344.522C481.706 344.522 503.307 322.921 503.307 296.277C503.307 269.633 481.706 248.032 455.059 248.032C428.404 248.032 406.803 269.633 406.803 296.277Z" fill="#A4C8EC"/>
                        <path id="path166" d="M460.157 290.079C459.633 289.635 459.092 289.299 458.525 289.054C457.963 288.815 457.257 288.697 456.414 288.697C455.21 288.697 454.091 289.035 453.063 289.716C452.036 290.404 451.153 291.29 450.407 292.375C449.663 293.466 449.092 294.68 448.687 296.027C448.281 297.376 448.086 298.693 448.086 299.979C448.086 301.307 448.355 302.394 448.901 303.24C449.44 304.084 450.383 304.505 451.707 304.505C452.27 304.505 452.87 304.337 453.516 303.991C454.158 303.653 454.785 303.2 455.387 302.637C455.995 302.072 456.573 301.425 457.135 300.707C457.704 299.979 458.206 299.222 458.649 298.403L460.157 290.079ZM463.962 282.775H468.181L465.287 299.132C464.967 301.025 464.954 302.394 465.26 303.24C465.559 304.084 466.233 304.505 467.281 304.505C468.324 304.505 469.353 304.263 470.356 303.783C471.363 303.298 472.27 302.554 473.079 301.545C473.883 300.542 474.535 299.273 475.042 297.747C475.543 296.217 475.795 294.407 475.795 292.313C475.795 289.299 475.288 286.721 474.285 284.589C473.278 282.455 471.896 280.694 470.149 279.307C468.397 277.919 466.336 276.903 463.962 276.261C461.586 275.616 459.028 275.296 456.292 275.296C453.157 275.296 450.236 275.857 447.541 276.983C444.844 278.114 442.498 279.659 440.505 281.631C438.515 283.602 436.956 285.951 435.832 288.663C434.703 291.381 434.14 294.332 434.14 297.503C434.14 300.639 434.61 303.461 435.56 305.956C436.503 308.447 437.881 310.575 439.692 312.327C441.503 314.069 443.747 315.42 446.42 316.368C449.1 317.31 452.171 317.787 455.631 317.787C456.795 317.787 458.123 317.647 459.616 317.362C461.104 317.078 462.448 316.659 463.656 316.096L465.527 321.891C463.879 322.695 462.193 323.255 460.486 323.581C458.78 323.901 456.823 324.062 454.602 324.062C450.696 324.062 447.09 323.497 443.762 322.373C440.447 321.244 437.573 319.577 435.137 317.362C432.701 315.151 430.802 312.403 429.433 309.123C428.062 305.844 427.375 302.052 427.375 297.747C427.375 293.361 428.16 289.399 429.734 285.851C431.3 282.316 433.412 279.299 436.073 276.804C438.727 274.307 441.805 272.388 445.308 271.038C448.807 269.691 452.507 269.02 456.414 269.02C460.116 269.02 463.557 269.552 466.737 270.617C469.915 271.682 472.672 273.211 475.004 275.204C477.339 277.197 479.169 279.633 480.498 282.506C481.83 285.383 482.491 288.654 482.491 292.313C482.491 294.888 482.038 297.3 481.133 299.556C480.226 301.811 478.982 303.764 477.392 305.415C475.801 307.062 473.951 308.37 471.838 309.337C469.725 310.303 467.462 310.783 465.048 310.783C464.043 310.783 463.104 310.671 462.24 310.45C461.376 310.231 460.649 309.861 460.069 309.337C459.479 308.815 459.049 308.133 458.767 307.282C458.487 306.437 458.403 305.392 458.525 304.142H458.285C457.683 304.99 457.028 305.813 456.32 306.618C455.619 307.423 454.843 308.141 454 308.759C453.157 309.385 452.229 309.882 451.224 310.241C450.216 310.598 449.109 310.783 447.906 310.783C446.937 310.783 446.01 310.575 445.128 310.15C444.241 309.724 443.475 309.134 442.831 308.37C442.188 307.604 441.668 306.679 441.29 305.592C440.911 304.505 440.718 303.298 440.718 301.972C440.718 299.477 441.123 297.054 441.927 294.697C442.731 292.341 443.83 290.262 445.216 288.454C446.602 286.638 448.214 285.181 450.045 284.078C451.876 282.972 453.82 282.418 455.871 282.418C457.28 282.418 458.463 282.629 459.432 283.05C460.401 283.473 461.282 284.027 462.09 284.707L463.962 282.775" fill="#F2F9FD"/>
                        <path id="path168" d="M213.993 40.8438C201.807 40.8536 191.931 50.8004 191.932 63.0567C191.945 75.3213 201.835 85.2542 214.025 85.2395C226.215 85.2304 236.096 75.2837 236.087 63.0267C236.079 50.7725 226.185 40.8312 213.993 40.8438Z" fill="#284197"/>
                        <path id="path172" d="M488.978 4.22444V27.9241" stroke="#F2F9FD" strokeWidth="3.91399" strokeMiterlimit="10"/>
                        <path id="path176" d="M145.005 195.004L158.711 181.303L172.41 195.004L158.711 208.703L145.005 195.004Z" stroke="#CBE6F8" strokeWidth="3.91399" strokeMiterlimit="10"/>
                        <path id="path178" d="M178.463 95.0753C178.463 98.1271 175.991 100.606 172.937 100.606C169.881 100.606 167.404 98.1271 167.404 95.0753C167.404 92.0178 169.881 89.5435 172.937 89.5435C175.991 89.5435 178.463 92.0178 178.463 95.0753Z" fill="#284197"/>
                        <g id="request-confirmation-design-email">
                        <path id="path136" d="M416.816 231.532H198.919V106.048H416.816V231.532Z" fill="#FABB1C"/>
                        <path id="path138" d="M416.667 105.922H318.459C315.529 105.922 311.647 105.922 307.78 105.922C303.905 105.922 300.039 105.922 297.098 105.922H209.579H198.896L226.119 130.256L245.214 147.323C247.446 149.322 250.393 151.95 253.338 154.584L278.754 177.308L299.652 195.988C304.125 199.98 311.433 199.98 315.909 195.988L336.808 177.308L362.227 154.584C365.174 151.95 368.117 149.322 370.352 147.323L389.448 130.256L416.667 105.922Z" fill="#F8A20E"/>
                        <path id="path140" d="M245.214 191.724C247.446 189.798 250.393 187.261 253.338 184.735L278.754 162.89L299.652 144.919C304.125 141.073 311.433 141.073 315.909 144.919L336.808 162.89L362.227 184.735C365.174 187.261 368.117 189.798 370.352 191.724L389.448 208.136L416.667 231.532L389.448 207.198L370.352 190.135C368.117 188.138 365.174 185.497 362.227 182.869L336.808 160.153L315.909 141.474C311.433 137.479 304.125 137.479 299.652 141.474L278.754 160.153L253.338 182.869C250.393 185.497 247.446 188.138 245.214 190.135L226.119 207.198L198.896 231.532L226.119 208.136L245.214 191.724Z" fill="#F8A20E"/>
                        <path id="path142" d="M416.667 105.922H318.459C315.529 105.922 311.647 105.922 307.78 105.922C303.905 105.922 300.039 105.922 297.098 105.922H209.579H198.896L226.119 129.14L245.214 145.427C247.446 147.325 250.393 149.837 253.338 152.354L278.754 174.033L299.652 191.846C304.125 195.663 311.433 195.663 315.909 191.846L336.808 174.033L362.227 152.354C365.174 149.837 368.117 147.325 370.352 145.427L389.448 129.14L416.667 105.922Z" fill="#F1DB65"/>
                        </g>
                        </g>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_86_41">
                        <rect width="570" height="683" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
