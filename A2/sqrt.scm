; find sqrt(x) where x = 2
; let y be our guess, we can make a better guess using
; y = (y + (x/y)) / 2
; start our guess as y = 1
; (1 + (2/1)) / 2 = 1.5
; refine it using
; (1.5 + (2/1.5)) / 2 = 1.4167

; define square function
(define (square x) (* x x))

; define terminating condition
(define (done? x guess)
  (< (abs (- (square guess) x)) 0.001))

; define a function that finds the average of two numbers
(define (average x y)
  (/ (+ x y) 2.0))

; make the next guess
(define (refine x guess)
  (average guess (/ x guess)))

; start our 'loop'
(define (search x guess)
  (if (done? x guess)
    guess
    (search x (refine x guess))))

; the sqrt function
(define (sqrt x) (search x 1.0))
