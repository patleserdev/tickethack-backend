LISTING DES ROUTES

POST      /trips                            - fournir departure arrival date                     -> retourne trips[]
POST      /cart/add                         - fournir tripId                                     -> retourne true/false
GET        /cart                                                                                 -> retourne carts[]
DELETE /cart/deleteone/:cartId              - fournir _id de cart                                -> retourne true
DELETE /cart/deleteall                                                                           -> retourne true
POST     /bookings/add                      - fournir tripId                                     -> retourne true/false
GET       /bookings                                                                              -> retourne bookings[]

