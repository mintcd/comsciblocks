export default [
    {
        chapter: 1,
        definitions: [
            {
                id: '1.1',
                content: "A $\\textbf{vector space}$ $V$"
            }
        ],
        theorems: []
    },
    {
        chapter: 6,
        theorems: [
            {
                id: '6.1',
                content: "$$\\textbf{Theorem 6.1}$$ For any $x,y,x\\in V$ and $c\\in\\mathbb{F}$ we have $\\\\ \\text{(a) }$  $\\langle x,y+z\\rangle = \\langle x,y\\rangle + \\langle x,z\\rangle$ $\\\\ \\text{(b) }$  $\\langle x,cy\\rangle =  \\overline{c}\\langle x,y\\rangle$. $\\\\ \\text{(c) }$  $\\langle x,0\\rangle =  \\langle 0,x\\rangle = 0$   $\\\\ \\text{(d) }$  $\\langle x,x\\rangle = 0 \\Leftrightarrow x=0$. $\\\\ \\text{(e) }$ $\\langle x,y\\rangle = \\langle x,z\\rangle,\\,\\, x\\in V \\Rightarrow y=z$.",
                depending: []
            },
            {
                id: '6.2',
                content: "$$\\textbf{Theorem 6.2}$$ Define $||x||=\\sqrt{\\langle x,x\\rangle}$ to be the norm of $x$. Then for all $x,y\\in V$ and $c\\in\\mathbb{F}$, we have $\\\\ \\text{(a) }$ $||cx||=|c|\\cdot||x||$. $\\\\ \\text{(b) }$ $||x||\\ge 0$, equality holds if and only if $|x|=0$ $\\\\ \\text{(c) }$ (Cauchy-Schwarz inequality) $|\\langle x,y\\rangle| \\le ||x||\\cdot||y||.$ $\\\\ \\text{(d) }$ (Triangle inequality) $||x+y||\\le ||x||+||y||.$",
                depending: []
            },
            {
                id: '6.3',
                content: "$$\\textbf{Theorem 6.3}$$ Vectors $x$ and $y$ are orthogonal if $\\langle x,y\\rangle=0$. A vector",
                depending: []
            },
            {
                id: '6.15',
                content: "$$\\textbf{Theorem 6.15}$$ Let $V$ be an inner product space, and let $T$ be a normal operator on $V$. Then the following statements are true. $\\\\ \\text{(a) }$  $||T(x)|| = ||T^*(x)||,\\,\\,x\\in V.$ $\\\\ \\text{(b) }$ $T-cI$ is normal for every $x\\in\\mathbb{F}.$ $\\\\ \\text{(c) }$ If $x$ is an eigenvector of $T$, then $x$ is also an eigenvector of $T^*$. In fact, if $T(x)=\\lambda x$, then $T^*(x)=\\overline{\\lambda}x$. $\\\\ \\text{(d) }$ If $\\lambda_1$ and $\\lambda_2$ are distinct eigenvalues of $T$ with corresponding eigenvectors $x_1$ and $x_2$, then $x_1$ and $x_2$ are orthogonal.",
                depending: []
            },

            {
                id: '6.16',
                content: "$$\\textbf{Theorem 6.16}$$ Let $T$ be a linear operator on a finite-dimensional complex inner product space $V$. Then $T$ is normal if and only if there exists an orthonormal basis for $V$ consisting of eigenvectors of $T$.",
                depending: []
            },
            {
                id: '6.17',
                content: "$$\\textbf{Theorem 6.17}$$ Let $T$ be a linear operator on a finite-dimensional real inner product space $V$. Then $T$ is self-adjoint if and only if there exists an orthonormal basis $β$ for $V$ consisting of eigenvectors of $T$.",
                depending: []
            },
            {
                id: '6.24',
                content: "$$\\textbf{Theorem 6.24}$$ Let $V$ be an inner product space and  $T$ be a linear operator on $V$. Then $T$ is an orthogonal projection if and only if $T$ has an adjoint $T^*$ and $T^2 = T = T^*$",
                depending: []
            },
            {
                id: '6.25',
                content: "$$\\textbf{Theorem 6.25 - The Spectral theorem}$$ Suppose that $T$ is a linear operator on a finite-dimensional inner product space $V$. Then",
                depending: ['6.16', '6.17']
            }
        ]
    }
]