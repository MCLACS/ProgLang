(define (addToList l1 l2)
  (if (null? l1)
    l2
    (cons (car l1) (addToList (cdr l1) l2) )
  )
)

(define (rev l)
  (if (null? l)
    ()
    (addToList (rev (cdr l)) (cons (car l) ()) )
  )
)
