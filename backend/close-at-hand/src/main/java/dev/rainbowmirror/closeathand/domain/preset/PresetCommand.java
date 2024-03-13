package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

public class PresetCommand {
    @Getter
    @Builder
    @ToString
    public static class InsertCommand{
        private final String presetImgUrl;
        private final String presetName;
        private final String userToken;
        @Setter
        private User user;
        public Preset toEntity(){
            return Preset.builder()
                    .presetImgUrl(presetImgUrl)
                    .presetName(presetName)
                    .user(user)
                    .build();
        }
    }

    @Getter
    @Builder
    @ToString
    public static class UpdateCommand{

    }
}
