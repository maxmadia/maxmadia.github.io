# prgm : le craintif : v1, sans variables d'état 
# auteur : Joël Rivet
# licence : CC-BY-NC
# maj : 15/10/23

# mode peureux
speed = 200

@onevent
def prox():
    global motor_left_target, motor_right_target, leds_top
    
    # rien autour
    motor_left_target = 0
    motor_right_target = 0
  
    leds_top = BLACK     
    if prox_horizontal[0] > 2000: # qqchose avant gauche
        motor_left_target = -speed
        motor_right_target = 0
        
    if prox_horizontal[4] > 2000: # qqchose avant droit
        motor_left_target = 0
        motor_right_target = -speed
    
    if prox_horizontal[6] > 2000:        
        if prox_horizontal[5] < 1000: # qqchose arrière droit seulement
          motor_left_target = 0
          motor_right_target = speed         
        else:                         # qqchose arrière gauche et droit
          motor_left_target = speed
          motor_right_target = speed
        
    if prox_horizontal[5] > 2000: # qqchose arrière gauche
        motor_left_target = speed
        motor_right_target = 0
    
    if prox_horizontal[2] > 2000:                
        if prox_horizontal[5] > 2000 or prox_horizontal[6] > 2000: # qqchose avant et arrière            
            motor_left_target = 0
            motor_right_target = 0
            nf_sound_system(4)
            leds_top = RED        
        else:                                                      # qqchose avant seulement     
            motor_left_target = -speed
            motor_right_target = -speed
           