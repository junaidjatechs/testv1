function c(cQ) {
        if (cQ && (aQ[aM + a4](bL, c), aQ[aM + a4](Y, c), aQ[aM + a4](bV, c)), Defer.dom(".custom-posts", 1, null, jo[ct], null, {
                rootMargin: "200%"
            }), 0 < H[cx]) {
            for (var cW = 0; cW < H[cx]; ++cW) {
                var cT = H[cW],
                    cU = cT[be],
                    cH = aQ[bJ]("textarea");
                cH[be] = cU[D](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                cU = aQ[bJ]("div");
                cU[be] = cH.value, 0 == cW && I(cU, "feature-image full-width"), cT[aW][cj + bO](cU, cT)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", E, null, {
                rootMargin: "200%"
            })
        }
        if (null !== cg) {
            if (null !== aJ && null !== aP && (aP[be] = aJ[be], aP[bk + a2]("data-no-item", aJ[bB + a2]("data-no-item"))), null !== aA) {
                for (var cJ = cg[cw](bK + "," + bI), cL = aA[ch], cI = cL[cx], cX = [], cW = 0; cW < cJ[cx]; cW++) {
                    var cR = cJ[cW][bU](bI);
                    cR && cJ[cW] != cR || cX[aq](cJ[cW])
                }
                for (var cM, cW = 0; cW < cI; cW++) {
                    cW == cI - 1 ? cg[cy](cL[0]) : (cM = cW == cI - 1 ? cX[cx] - 1 : b0[bu](cX[cx] / cI) * cW, (cM = 0 == cW ? cX[0] : cX[cM][bG]) && cM[aW][cj + bO](cL[0], cM))
                }
            }
            if (bn && bn != x && ak && null !== cg[bA]) {
                for (var cS = cg[cw]("h2,h3,h4,h5,h6"), cK = aQ[bJ]("div"), cQ = cg[bv](n), cO = [], cW = 0; cW < cS[cx]; cW++) {
                    var cV = cS[cW],
                        cP = cV[bR][D](/[^\w!?]/g, "_")[D](/__/g, "_"),
                        cN = q(cV[bM][D]("H", ""));
                    cV[ci] = cP, cO[aq]({
                        level: cN,
                        title: cV[bR],
                        id: cP
                    })
                }
                null === cQ ? cQ = cg[bA] : cQ[bG] && (cQ = cQ[bG]), 0 < cO[cx] && (cK[be] = ak(cO)[a8](), cQ && cQ[aW][cj + bO](cK, cQ))
            }
        }
        cA || (aR && (typeof adsbygoogle === cE && (adsbygoogle = []), Defer.js(ce + "pagead2.googlesyndication.com/pagead/js/" + cC + ".js?client=" + aR, cC, 100)), v && v != x && Defer.js(ce + "www.googletagmanager.com/gtag/js?id=" + v, bE, 100, function() {
            function i() {
                dataLayer[aq](arguments)
            }
            i("js", new Date), i(O, v)
        }), bd && bd()), r && Defer.css(ce + Z + "dyn-css/authorization.css?targetBlogID=" + r)
    }
    ae && (aQ[aT] = aQ[aT][D](br, br + b6 + " " + ae + br)), Defer.dom(".lazyload", 1, "loaded", E), Defer.dom("#post-pager", 1, null, y, null, {
        rootMargin: "200%"
    }), Defer.dom("#pagination", 1, null, cB, null, {
        rootMargin: "200%"
    }), b5 ? c(!1) : (null !== bC && bC[bk + aS]("lazy", 1), aQ[cc + a4](bL, c), aQ[cc + a4](Y, c), aQ[cc + a4](bV, c))
}();
