(define (pow n p)
  (if (= p 0) 1 (* n (pow n (- p 1)))))
