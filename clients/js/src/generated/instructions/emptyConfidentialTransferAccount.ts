/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  AccountRole,
  combineCodec,
  getI8Decoder,
  getI8Encoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type AccountMeta,
  type AccountSignerMeta,
  type Address,
  type FixedSizeCodec,
  type FixedSizeDecoder,
  type FixedSizeEncoder,
  type Instruction,
  type InstructionWithAccounts,
  type InstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/kit';
import { TOKEN_2022_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const EMPTY_CONFIDENTIAL_TRANSFER_ACCOUNT_DISCRIMINATOR = 27;

export function getEmptyConfidentialTransferAccountDiscriminatorBytes() {
  return getU8Encoder().encode(
    EMPTY_CONFIDENTIAL_TRANSFER_ACCOUNT_DISCRIMINATOR
  );
}

export const EMPTY_CONFIDENTIAL_TRANSFER_ACCOUNT_CONFIDENTIAL_TRANSFER_DISCRIMINATOR = 4;

export function getEmptyConfidentialTransferAccountConfidentialTransferDiscriminatorBytes() {
  return getU8Encoder().encode(
    EMPTY_CONFIDENTIAL_TRANSFER_ACCOUNT_CONFIDENTIAL_TRANSFER_DISCRIMINATOR
  );
}

export type EmptyConfidentialTransferAccountInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountToken extends string | AccountMeta<string> = string,
  TAccountInstructionsSysvarOrContextState extends
    | string
    | AccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountRecord extends string | AccountMeta<string> = string,
  TAccountAuthority extends string | AccountMeta<string> = string,
  TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Instruction<TProgram> &
  InstructionWithData<ReadonlyUint8Array> &
  InstructionWithAccounts<
    [
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountInstructionsSysvarOrContextState extends string
        ? ReadonlyAccount<TAccountInstructionsSysvarOrContextState>
        : TAccountInstructionsSysvarOrContextState,
      TAccountRecord extends string
        ? ReadonlyAccount<TAccountRecord>
        : TAccountRecord,
      TAccountAuthority extends string
        ? ReadonlyAccount<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type EmptyConfidentialTransferAccountInstructionData = {
  discriminator: number;
  confidentialTransferDiscriminator: number;
  /**
   * Relative location of the `ProofInstruction::VerifyCloseAccount`
   * instruction to the `EmptyAccount` instruction in the transaction. If
   * the offset is `0`, then use a context state account for the proof.
   */
  proofInstructionOffset: number;
};

export type EmptyConfidentialTransferAccountInstructionDataArgs = {
  /**
   * Relative location of the `ProofInstruction::VerifyCloseAccount`
   * instruction to the `EmptyAccount` instruction in the transaction. If
   * the offset is `0`, then use a context state account for the proof.
   */
  proofInstructionOffset: number;
};

export function getEmptyConfidentialTransferAccountInstructionDataEncoder(): FixedSizeEncoder<EmptyConfidentialTransferAccountInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['confidentialTransferDiscriminator', getU8Encoder()],
      ['proofInstructionOffset', getI8Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: EMPTY_CONFIDENTIAL_TRANSFER_ACCOUNT_DISCRIMINATOR,
      confidentialTransferDiscriminator:
        EMPTY_CONFIDENTIAL_TRANSFER_ACCOUNT_CONFIDENTIAL_TRANSFER_DISCRIMINATOR,
    })
  );
}

export function getEmptyConfidentialTransferAccountInstructionDataDecoder(): FixedSizeDecoder<EmptyConfidentialTransferAccountInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['confidentialTransferDiscriminator', getU8Decoder()],
    ['proofInstructionOffset', getI8Decoder()],
  ]);
}

export function getEmptyConfidentialTransferAccountInstructionDataCodec(): FixedSizeCodec<
  EmptyConfidentialTransferAccountInstructionDataArgs,
  EmptyConfidentialTransferAccountInstructionData
> {
  return combineCodec(
    getEmptyConfidentialTransferAccountInstructionDataEncoder(),
    getEmptyConfidentialTransferAccountInstructionDataDecoder()
  );
}

export type EmptyConfidentialTransferAccountInput<
  TAccountToken extends string = string,
  TAccountInstructionsSysvarOrContextState extends string = string,
  TAccountRecord extends string = string,
  TAccountAuthority extends string = string,
> = {
  /** The SPL Token account. */
  token: Address<TAccountToken>;
  /**
   * Instructions sysvar if `VerifyZeroCiphertext` is included in
   * the same transaction or context state account if
   * `VerifyZeroCiphertext` is pre-verified into a context state
   * account.
   */
  instructionsSysvarOrContextState?: Address<TAccountInstructionsSysvarOrContextState>;
  /** (Optional) Record account if the accompanying proof is to be read from a record account. */
  record?: Address<TAccountRecord>;
  /** The source account's owner/delegate or its multisignature account. */
  authority: Address<TAccountAuthority> | TransactionSigner<TAccountAuthority>;
  proofInstructionOffset: EmptyConfidentialTransferAccountInstructionDataArgs['proofInstructionOffset'];
  multiSigners?: Array<TransactionSigner>;
};

export function getEmptyConfidentialTransferAccountInstruction<
  TAccountToken extends string,
  TAccountInstructionsSysvarOrContextState extends string,
  TAccountRecord extends string,
  TAccountAuthority extends string,
  TProgramAddress extends Address = typeof TOKEN_2022_PROGRAM_ADDRESS,
>(
  input: EmptyConfidentialTransferAccountInput<
    TAccountToken,
    TAccountInstructionsSysvarOrContextState,
    TAccountRecord,
    TAccountAuthority
  >,
  config?: { programAddress?: TProgramAddress }
): EmptyConfidentialTransferAccountInstruction<
  TProgramAddress,
  TAccountToken,
  TAccountInstructionsSysvarOrContextState,
  TAccountRecord,
  (typeof input)['authority'] extends TransactionSigner<TAccountAuthority>
    ? ReadonlySignerAccount<TAccountAuthority> &
        AccountSignerMeta<TAccountAuthority>
    : TAccountAuthority
> {
  // Program address.
  const programAddress = config?.programAddress ?? TOKEN_2022_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    token: { value: input.token ?? null, isWritable: true },
    instructionsSysvarOrContextState: {
      value: input.instructionsSysvarOrContextState ?? null,
      isWritable: false,
    },
    record: { value: input.record ?? null, isWritable: false },
    authority: { value: input.authority ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.instructionsSysvarOrContextState.value) {
    accounts.instructionsSysvarOrContextState.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }

  // Remaining accounts.
  const remainingAccounts: AccountMeta[] = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: AccountRole.READONLY_SIGNER,
      signer,
    })
  );

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.token),
      getAccountMeta(accounts.instructionsSysvarOrContextState),
      getAccountMeta(accounts.record),
      getAccountMeta(accounts.authority),
      ...remainingAccounts,
    ],
    programAddress,
    data: getEmptyConfidentialTransferAccountInstructionDataEncoder().encode(
      args as EmptyConfidentialTransferAccountInstructionDataArgs
    ),
  } as EmptyConfidentialTransferAccountInstruction<
    TProgramAddress,
    TAccountToken,
    TAccountInstructionsSysvarOrContextState,
    TAccountRecord,
    (typeof input)['authority'] extends TransactionSigner<TAccountAuthority>
      ? ReadonlySignerAccount<TAccountAuthority> &
          AccountSignerMeta<TAccountAuthority>
      : TAccountAuthority
  >;

  return instruction;
}

export type ParsedEmptyConfidentialTransferAccountInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The SPL Token account. */
    token: TAccountMetas[0];
    /**
     * Instructions sysvar if `VerifyZeroCiphertext` is included in
     * the same transaction or context state account if
     * `VerifyZeroCiphertext` is pre-verified into a context state
     * account.
     */

    instructionsSysvarOrContextState: TAccountMetas[1];
    /** (Optional) Record account if the accompanying proof is to be read from a record account. */
    record?: TAccountMetas[2] | undefined;
    /** The source account's owner/delegate or its multisignature account. */
    authority: TAccountMetas[3];
  };
  data: EmptyConfidentialTransferAccountInstructionData;
};

export function parseEmptyConfidentialTransferAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly AccountMeta[],
>(
  instruction: Instruction<TProgram> &
    InstructionWithAccounts<TAccountMetas> &
    InstructionWithData<ReadonlyUint8Array>
): ParsedEmptyConfidentialTransferAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === TOKEN_2022_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      token: getNextAccount(),
      instructionsSysvarOrContextState: getNextAccount(),
      record: getNextOptionalAccount(),
      authority: getNextAccount(),
    },
    data: getEmptyConfidentialTransferAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
