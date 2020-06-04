class DigestSpamJob
    include Sidekiq::Worker
    def perform(frequency_digest)
      if frequency_digest == 0 
        tag_digest = 'digest:daily'
      elsif frequency_digest == 1 
        tag_digest = 'digest:weekly'
      end
      users = User.where(role: %w(moderator admin))  #only for moderators and admins
        .includes(:user_tags)
        .where('user_tags.value=?', tag_digest)
        .references(:user_tags)
      users.each(&:send_digest_email_spam)
    end
end