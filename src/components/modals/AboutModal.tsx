import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is the Degen DAOO version of the popular game 'wordle'. <br/>
        <a
          href="https://twitter.com/DegenDAOO"
          className="underline font-bold"
        >
          check out the Degen DAOO twitter here
        </a>
      </p>
    </BaseModal>
  )
}
