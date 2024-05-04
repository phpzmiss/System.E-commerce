package com.ecommerce.backendNijan.service;

import com.ecommerce.backendNijan.entity.CredentialsEntity;
import com.ecommerce.backendNijan.entity.UserEntity;
import com.ecommerce.backendNijan.model.UserModelDto;
import com.ecommerce.backendNijan.repository.CredentialsRepository;
import com.ecommerce.backendNijan.repository.UserRepository;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CredentialsRepository credentialsRepository;

    /**
     * Locates the user based on the username. In the actual implementation, the search
     * may possibly be case sensitive, or case insensitive depending on how the
     * implementation instance is configured. In this case, the <code>UserDetails</code>
     * object that comes back may have a username that is of a different case than what
     * was actually requested..
     *
     * @param username the username identifying the user whose data is required.
     * @return a fully populated user record (never <code>null</code>)
     * @throws UsernameNotFoundException if the user could not be found or the user has no
     *                                   GrantedAuthority
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found.!"));
        CredentialsEntity credentials = credentialsRepository.findById(user.getUserId())
                .orElseThrow(() -> new UsernameNotFoundException("Username not found.!"));

        return this.toBuildUserDetailsModel(user, credentials);
    }

    /**
     * Delete user.
     *
     * @return find all user.
     */
    public Boolean deleteUserById(Long userId) {
        try {
            userRepository.deleteById(userId);
            return Boolean.TRUE;
        } catch (DataAccessException dataAccessException) {
            dataAccessException.printStackTrace();
            return Boolean.FALSE;
        }
    }

    /**
     * Delete user.
     *
     * @return find all user.
     */
    public UserEntity changeRoleName(Long userId, String role) {
        Optional<UserEntity> userEntity = userRepository.findById(userId);
        userEntity.get().setRole(role);
        return userRepository.save(userEntity.get());
    }

    /**
     * Check username is not exists.
     *
     * @param username username
     * @return TRUE if exist else FALSE.
     */
    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    /**
     * Check email is not exists.
     *
     * @param email email
     * @return TRUE if exist else FALSE.
     */
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    /**
     * Insert all user with role.
     *
     * @param userEntityList userEntityList
     * @return TRUE if exist else FALSE.
     */
    public List<UserEntity> insert(List<UserEntity> userEntityList) {
        return userRepository.saveAll(userEntityList);
    }

    /**
     * Insert user with role.
     *
     * @param userEntity userEntity
     * @return TRUE if exist else FALSE.
     */
    public UserEntity insert(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    /**
     * Insert user with role.
     *
     * @param entity entity
     * @return TRUE if exist else FALSE.
     */
    public CredentialsEntity insert(CredentialsEntity entity) {
        return credentialsRepository.save(entity);
    }

    /**
     * Create user detail model.
     *
     * @param authentication authentication
     * @return user model
     */
    public UserModelDto getUserModel(Authentication authentication) {
        return (UserModelDto) authentication.getPrincipal();
    }

    /**
     * Map object DTO to model.
     *
     * @param user        userDTO
     * @param credentials
     * @return user details model
     */
    private UserModelDto toBuildUserDetailsModel(@NotNull UserEntity user, CredentialsEntity credentials) {
        return UserModelDto.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .password(credentials.getPasswordHash())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }

}
